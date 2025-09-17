# Silansoftware - Payment Gateway Frontend

A modern React-based payment gateway frontend built with Vite, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with Tailwind CSS
- **TypeScript**: Full type safety and better development experience
- **React Router**: Client-side routing for seamless navigation
- **Lucide Icons**: Beautiful, consistent iconography
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Performance Optimized**: Code splitting and lazy loading

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router DOM** - Routing
- **Lucide React** - Icons
- **Framer Motion** - Animations

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

### Netlify Deployment

This project is configured for easy deployment on Netlify:

1. **Connect Repository**: Link your GitHub repository to Netlify
2. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18`
3. **Deploy**: Netlify will automatically build and deploy your app

### Manual Deployment

```bash
# Build the project
npm run build

# The dist folder contains the production build
# Upload the contents of dist/ to your hosting provider
```

## 📁 Project Structure

```
frontend/
├── public/
│   ├── _redirects          # Netlify redirects for SPA
│   └── vite.svg
├── src/
│   ├── components/         # Reusable components
│   ├── pages/             # Page components
│   ├── context/           # React context providers
│   ├── hooks/             # Custom hooks
│   ├── services/          # API services
│   ├── styles/            # Global styles
│   └── utils/             # Utility functions
├── netlify.toml           # Netlify configuration
├── vite.config.ts         # Vite configuration
└── package.json
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=https://api.silansoftware.com
VITE_APP_NAME=Silansoftware
```

### Build Optimization

The project is configured with:

- Code splitting for better performance
- Asset optimization
- Terser minification
- Manual chunk splitting for vendor libraries

## 🚀 Quick Start

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

## 📱 Responsive Design

The app is fully responsive with breakpoints:

- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Custom Components**: Reusable UI components
- **Dark Mode**: Ready for dark mode implementation
- **Animations**: Smooth transitions with Framer Motion

## 📄 License

This project is proprietary software owned by
Silansoftware Private Limited.
