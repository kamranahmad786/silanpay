import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  type ReactNode,
} from "react";
import { useAuth } from "./AuthContext";
import toast from "react-hot-toast";

// Types
interface PaymentMethod {
  id: string;
  type: "card" | "upi" | "netbanking" | "wallet" | "emi";
  name: string;
  icon: string;
  isEnabled: boolean;
  fees: {
    percentage: number;
    fixed: number;
  };
}

interface PaymentGateway {
  id: string;
  name: "razorpay" | "phonepe";
  isEnabled: boolean;
  credentials: {
    keyId: string;
    keySecret: string;
    webhookSecret: string;
  };
  settings: {
    testMode: boolean;
    autoSettlement: boolean;
    settlementFrequency: "daily" | "weekly" | "monthly";
  };
}

interface Transaction {
  id: string;
  amount: number;
  currency: string;
  status:
    | "pending"
    | "processing"
    | "completed"
    | "failed"
    | "cancelled"
    | "refunded";
  paymentMethod: string;
  gateway: string;
  customerEmail: string;
  customerName: string;
  description: string;
  createdAt: string;
  completedAt?: string;
  failureReason?: string;
  gatewayTransactionId?: string;
  refundAmount?: number;
  refundStatus?: "pending" | "processed" | "failed";
}

interface PaymentLink {
  id: string;
  title: string;
  description: string;
  amount: number;
  currency: string;
  status: "active" | "paused" | "expired";
  expiresAt?: string;
  usageCount: number;
  successCount: number;
  createdAt: string;
  url: string;
  qrCode: string;
}

interface Settlement {
  id: string;
  amount: number;
  currency: string;
  status: "pending" | "processing" | "completed" | "failed";
  gateway: string;
  settlementDate: string;
  transactionCount: number;
  fees: number;
  netAmount: number;
  bankAccount: {
    accountNumber: string;
    ifscCode: string;
    accountHolderName: string;
  };
}

interface PaymentState {
  paymentMethods: PaymentMethod[];
  gateways: PaymentGateway[];
  transactions: Transaction[];
  paymentLinks: PaymentLink[];
  settlements: Settlement[];
  isLoading: boolean;
  error: string | null;
  stats: {
    totalTransactions: number;
    totalAmount: number;
    successRate: number;
    pendingSettlements: number;
    todayTransactions: number;
    todayAmount: number;
  };
}

interface CreatePaymentData {
  amount: number;
  currency: string;
  description: string;
  customerEmail: string;
  customerName: string;
  paymentMethod?: string;
  gateway?: string;
  expiresAt?: string;
  webhookUrl?: string;
  successUrl?: string;
  failureUrl?: string;
}

interface PaymentContextType extends PaymentState {
  createPayment: (data: CreatePaymentData) => Promise<PaymentLink>;
  createPaymentLink: (data: CreatePaymentData) => Promise<PaymentLink>;
  getTransactions: (filters?: any) => Promise<void>;
  getPaymentLinks: () => Promise<void>;
  getSettlements: () => Promise<void>;
  updatePaymentLink: (id: string, data: Partial<PaymentLink>) => Promise<void>;
  deletePaymentLink: (id: string) => Promise<void>;
  processRefund: (transactionId: string, amount?: number) => Promise<void>;
  updateGatewaySettings: (
    gatewayId: string,
    settings: Partial<PaymentGateway>
  ) => Promise<void>;
  updatePaymentMethodSettings: (
    methodId: string,
    settings: Partial<PaymentMethod>
  ) => Promise<void>;
  clearError: () => void;
  refreshStats: () => Promise<void>;
}

// Action Types
type PaymentAction =
  | { type: "PAYMENT_START" }
  | { type: "PAYMENT_SUCCESS"; payload: any }
  | { type: "PAYMENT_FAILURE"; payload: string }
  | { type: "SET_PAYMENT_METHODS"; payload: PaymentMethod[] }
  | { type: "SET_GATEWAYS"; payload: PaymentGateway[] }
  | { type: "SET_TRANSACTIONS"; payload: Transaction[] }
  | { type: "SET_PAYMENT_LINKS"; payload: PaymentLink[] }
  | { type: "SET_SETTLEMENTS"; payload: Settlement[] }
  | { type: "SET_STATS"; payload: any }
  | { type: "ADD_TRANSACTION"; payload: Transaction }
  | { type: "UPDATE_TRANSACTION"; payload: Transaction }
  | { type: "ADD_PAYMENT_LINK"; payload: PaymentLink }
  | { type: "UPDATE_PAYMENT_LINK"; payload: PaymentLink }
  | { type: "REMOVE_PAYMENT_LINK"; payload: string }
  | { type: "CLEAR_ERROR" }
  | { type: "SET_LOADING"; payload: boolean };

// Initial State
const initialState: PaymentState = {
  paymentMethods: [],
  gateways: [],
  transactions: [],
  paymentLinks: [],
  settlements: [],
  isLoading: false,
  error: null,
  stats: {
    totalTransactions: 0,
    totalAmount: 0,
    successRate: 0,
    pendingSettlements: 0,
    todayTransactions: 0,
    todayAmount: 0,
  },
};

// Reducer
const paymentReducer = (
  state: PaymentState,
  action: PaymentAction
): PaymentState => {
  switch (action.type) {
    case "PAYMENT_START":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "PAYMENT_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case "PAYMENT_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "SET_PAYMENT_METHODS":
      return {
        ...state,
        paymentMethods: action.payload,
      };
    case "SET_GATEWAYS":
      return {
        ...state,
        gateways: action.payload,
      };
    case "SET_TRANSACTIONS":
      return {
        ...state,
        transactions: action.payload,
      };
    case "SET_PAYMENT_LINKS":
      return {
        ...state,
        paymentLinks: action.payload,
      };
    case "SET_SETTLEMENTS":
      return {
        ...state,
        settlements: action.payload,
      };
    case "SET_STATS":
      return {
        ...state,
        stats: action.payload,
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "UPDATE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.map((t) =>
          t.id === action.payload.id ? action.payload : t
        ),
      };
    case "ADD_PAYMENT_LINK":
      return {
        ...state,
        paymentLinks: [action.payload, ...state.paymentLinks],
      };
    case "UPDATE_PAYMENT_LINK":
      return {
        ...state,
        paymentLinks: state.paymentLinks.map((pl) =>
          pl.id === action.payload.id ? action.payload : pl
        ),
      };
    case "REMOVE_PAYMENT_LINK":
      return {
        ...state,
        paymentLinks: state.paymentLinks.filter(
          (pl) => pl.id !== action.payload
        ),
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
const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

// Payment Provider Component
interface PaymentProviderProps {
  children: ReactNode;
}

export const PaymentProvider: React.FC<PaymentProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(paymentReducer, initialState);
  const { token, isAuthenticated } = useAuth();

  // Load initial data when authenticated
  useEffect(() => {
    if (isAuthenticated && token) {
      loadInitialData();
    }
  }, [isAuthenticated, token]);

  // Load initial data
  const loadInitialData = async () => {
    try {
      await Promise.all([
        getPaymentMethods(),
        getGateways(),
        getTransactions(),
        getPaymentLinks(),
        getSettlements(),
        refreshStats(),
      ]);
    } catch (error) {
      console.error("Failed to load initial data:", error);
    }
  };

  // Get payment methods
  const getPaymentMethods = async () => {
    try {
      const response = await fetch("/api/payments/methods", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: "SET_PAYMENT_METHODS", payload: data.methods });
      }
    } catch (error) {
      console.error("Failed to fetch payment methods:", error);
    }
  };

  // Get gateways
  const getGateways = async () => {
    try {
      const response = await fetch("/api/payments/gateways", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: "SET_GATEWAYS", payload: data.gateways });
      }
    } catch (error) {
      console.error("Failed to fetch gateways:", error);
    }
  };

  // Get transactions
  const getTransactions = async (filters?: any) => {
    dispatch({ type: "PAYMENT_START" });

    try {
      const queryParams = new URLSearchParams(filters).toString();
      const response = await fetch(
        `/api/payments/transactions?${queryParams}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: "SET_TRANSACTIONS", payload: data.transactions });
        dispatch({ type: "PAYMENT_SUCCESS", payload: null });
      } else {
        const errorData = await response.json();
        dispatch({
          type: "PAYMENT_FAILURE",
          payload: errorData.message || "Failed to fetch transactions",
        });
      }
    } catch (error) {
      dispatch({ type: "PAYMENT_FAILURE", payload: "Network error" });
    }
  };

  // Get payment links
  const getPaymentLinks = async () => {
    try {
      const response = await fetch("/api/payments/links", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: "SET_PAYMENT_LINKS", payload: data.links });
      }
    } catch (error) {
      console.error("Failed to fetch payment links:", error);
    }
  };

  // Get settlements
  const getSettlements = async () => {
    try {
      const response = await fetch("/api/payments/settlements", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: "SET_SETTLEMENTS", payload: data.settlements });
      }
    } catch (error) {
      console.error("Failed to fetch settlements:", error);
    }
  };

  // Create payment
  const createPayment = async (
    data: CreatePaymentData
  ): Promise<PaymentLink> => {
    dispatch({ type: "PAYMENT_START" });

    try {
      const response = await fetch("/api/payments/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        dispatch({ type: "ADD_PAYMENT_LINK", payload: responseData.link });
        dispatch({ type: "PAYMENT_SUCCESS", payload: null });
        toast.success("Payment link created successfully");
        return responseData.link;
      } else {
        dispatch({
          type: "PAYMENT_FAILURE",
          payload: responseData.message || "Failed to create payment",
        });
        toast.error(responseData.message || "Failed to create payment");
        throw new Error(responseData.message || "Failed to create payment");
      }
    } catch (error) {
      dispatch({ type: "PAYMENT_FAILURE", payload: "Network error" });
      toast.error("Network error");
      throw error;
    }
  };

  // Create payment link (alias for createPayment)
  const createPaymentLink = createPayment;

  // Update payment link
  const updatePaymentLink = async (id: string, data: Partial<PaymentLink>) => {
    try {
      const response = await fetch(`/api/payments/links/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        dispatch({ type: "UPDATE_PAYMENT_LINK", payload: responseData.link });
        toast.success("Payment link updated successfully");
      } else {
        toast.error(responseData.message || "Failed to update payment link");
      }
    } catch (error) {
      toast.error("Network error");
    }
  };

  // Delete payment link
  const deletePaymentLink = async (id: string) => {
    try {
      const response = await fetch(`/api/payments/links/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        dispatch({ type: "REMOVE_PAYMENT_LINK", payload: id });
        toast.success("Payment link deleted successfully");
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Failed to delete payment link");
      }
    } catch (error) {
      toast.error("Network error");
    }
  };

  // Process refund
  const processRefund = async (transactionId: string, amount?: number) => {
    try {
      const response = await fetch(`/api/payments/refund`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ transactionId, amount }),
      });

      const responseData = await response.json();

      if (response.ok) {
        dispatch({
          type: "UPDATE_TRANSACTION",
          payload: responseData.transaction,
        });
        toast.success("Refund processed successfully");
      } else {
        toast.error(responseData.message || "Failed to process refund");
      }
    } catch (error) {
      toast.error("Network error");
    }
  };

  // Update gateway settings
  const updateGatewaySettings = async (
    gatewayId: string,
    settings: Partial<PaymentGateway>
  ) => {
    try {
      const response = await fetch(`/api/payments/gateways/${gatewayId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(settings),
      });

      const responseData = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_GATEWAYS", payload: responseData.gateways });
        toast.success("Gateway settings updated successfully");
      } else {
        toast.error(
          responseData.message || "Failed to update gateway settings"
        );
      }
    } catch (error) {
      toast.error("Network error");
    }
  };

  // Update payment method settings
  const updatePaymentMethodSettings = async (
    methodId: string,
    settings: Partial<PaymentMethod>
  ) => {
    try {
      const response = await fetch(`/api/payments/methods/${methodId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(settings),
      });

      const responseData = await response.json();

      if (response.ok) {
        dispatch({
          type: "SET_PAYMENT_METHODS",
          payload: responseData.methods,
        });
        toast.success("Payment method settings updated successfully");
      } else {
        toast.error(
          responseData.message || "Failed to update payment method settings"
        );
      }
    } catch (error) {
      toast.error("Network error");
    }
  };

  // Clear error
  const clearError = () => {
    dispatch({ type: "CLEAR_ERROR" });
  };

  // Refresh stats
  const refreshStats = async () => {
    try {
      const response = await fetch("/api/payments/stats", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: "SET_STATS", payload: data.stats });
      }
    } catch (error) {
      console.error("Failed to fetch stats:", error);
    }
  };

  const contextValue: PaymentContextType = {
    ...state,
    createPayment,
    createPaymentLink,
    getTransactions,
    getPaymentLinks,
    getSettlements,
    updatePaymentLink,
    deletePaymentLink,
    processRefund,
    updateGatewaySettings,
    updatePaymentMethodSettings,
    clearError,
    refreshStats,
  };

  return (
    <PaymentContext.Provider value={contextValue}>
      {children}
    </PaymentContext.Provider>
  );
};

// Custom hook to use payment context
export const usePayment = (): PaymentContextType => {
  const context = useContext(PaymentContext);
  if (context === undefined) {
    throw new Error("usePayment must be used within a PaymentProvider");
  }
  return context;
};

export default PaymentContext;
