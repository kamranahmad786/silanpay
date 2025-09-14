import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  type ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

// Types
interface User {
  id: string;
  email: string;
  name: string;
  role: "merchant" | "admin";
  businessName?: string;
  isVerified: boolean;
  avatar?: string;
  createdAt: string;
  lastLoginAt?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  businessName: string;
  businessType: string;
  phone: string;
  acceptTerms: boolean;
}

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, password: string) => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<void>;
  changePassword: (
    currentPassword: string,
    newPassword: string
  ) => Promise<void>;
  clearError: () => void;
  refreshToken: () => Promise<void>;
}

// Action Types
type AuthAction =
  | { type: "AUTH_START" }
  | { type: "AUTH_SUCCESS"; payload: { user: User; token: string } }
  | { type: "AUTH_FAILURE"; payload: string }
  | { type: "LOGOUT" }
  | { type: "UPDATE_USER"; payload: User }
  | { type: "CLEAR_ERROR" }
  | { type: "SET_LOADING"; payload: boolean };

// Initial State
const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

// Reducer
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "AUTH_START":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "AUTH_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case "AUTH_FAILURE":
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      };
    case "UPDATE_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "CLEAR_ERROR":
      return {
        ...state,
        error: null,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

// Create Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth Provider Component
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const navigate = useNavigate();

  // Check for existing token on mount
  useEffect(() => {
    const initializeAuth = async () => {
      const token = Cookies.get("auth_token");
      if (token) {
        try {
          // Verify token with backend
          const response = await fetch("/api/auth/verify", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const userData = await response.json();
            dispatch({
              type: "AUTH_SUCCESS",
              payload: { user: userData.user, token },
            });
          } else {
            // Token is invalid, remove it
            Cookies.remove("auth_token");
            dispatch({ type: "LOGOUT" });
          }
        } catch (error) {
          console.error("Token verification failed:", error);
          Cookies.remove("auth_token");
          dispatch({ type: "LOGOUT" });
        }
      } else {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };

    initializeAuth();
  }, []);

  // Login function
  const login = async (credentials: LoginCredentials) => {
    dispatch({ type: "AUTH_START" });

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok) {
        const { user, token } = data;

        // Set cookie with appropriate expiry
        const cookieOptions = {
          expires: credentials.rememberMe ? 30 : 1, // 30 days or 1 day
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict" as const,
        };

        Cookies.set("auth_token", token, cookieOptions);

        dispatch({
          type: "AUTH_SUCCESS",
          payload: { user, token },
        });

        toast.success("Login successful!");

        // Redirect based on user role
        if (user.role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/dashboard");
        }
      } else {
        dispatch({
          type: "AUTH_FAILURE",
          payload: data.message || "Login failed",
        });
        toast.error(data.message || "Login failed");
      }
    } catch (error) {
      const errorMessage = "Network error. Please try again.";
      dispatch({ type: "AUTH_FAILURE", payload: errorMessage });
      toast.error(errorMessage);
    }
  };

  // Register function
  const register = async (data: RegisterData) => {
    dispatch({ type: "AUTH_START" });

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        toast.success(
          "Registration successful! Please check your email for verification."
        );
        navigate("/login");
      } else {
        dispatch({
          type: "AUTH_FAILURE",
          payload: responseData.message || "Registration failed",
        });
        toast.error(responseData.message || "Registration failed");
      }
    } catch (error) {
      const errorMessage = "Network error. Please try again.";
      dispatch({ type: "AUTH_FAILURE", payload: errorMessage });
      toast.error(errorMessage);
    }
  };

  // Logout function
  const logout = () => {
    Cookies.remove("auth_token");
    dispatch({ type: "LOGOUT" });
    toast.success("Logged out successfully");
    navigate("/");
  };

  // Forgot password function
  const forgotPassword = async (email: string) => {
    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Password reset link sent to your email");
      } else {
        toast.error(data.message || "Failed to send reset link");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    }
  };

  // Reset password function
  const resetPassword = async (token: string, password: string) => {
    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(
          "Password reset successful! Please login with your new password."
        );
        navigate("/login");
      } else {
        toast.error(data.message || "Password reset failed");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    }
  };

  // Update profile function
  const updateProfile = async (data: Partial<User>) => {
    if (!state.token) return;

    try {
      const response = await fetch("/api/auth/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.token}`,
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        dispatch({ type: "UPDATE_USER", payload: responseData.user });
        toast.success("Profile updated successfully");
      } else {
        toast.error(responseData.message || "Failed to update profile");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    }
  };

  // Change password function
  const changePassword = async (
    currentPassword: string,
    newPassword: string
  ) => {
    if (!state.token) return;

    try {
      const response = await fetch("/api/auth/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.token}`,
        },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Password changed successfully");
      } else {
        toast.error(data.message || "Failed to change password");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    }
  };

  // Clear error function
  const clearError = () => {
    dispatch({ type: "CLEAR_ERROR" });
  };

  // Refresh token function
  const refreshToken = async () => {
    if (!state.token) return;

    try {
      const response = await fetch("/api/auth/refresh", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        Cookies.set("auth_token", data.token, {
          expires: 30,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
        });
        dispatch({
          type: "AUTH_SUCCESS",
          payload: { user: state.user!, token: data.token },
        });
      } else {
        // Token refresh failed, logout user
        logout();
      }
    } catch (error) {
      console.error("Token refresh failed:", error);
      logout();
    }
  };

  const contextValue: AuthContextType = {
    ...state,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
    updateProfile,
    changePassword,
    clearError,
    refreshToken,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthContext;
