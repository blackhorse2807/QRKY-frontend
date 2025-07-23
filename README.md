# QRky Frontend

A Next.js frontend application for QRky - a QR code generator with advanced analytics.

## Features

- 🔐 **Authentication System**: Complete login/register functionality
- 🎨 **Modern UI**: Built with Tailwind CSS and Lucide React icons
- 📱 **Responsive Design**: Works on all device sizes
- 🔒 **Protected Routes**: Automatic redirection for unauthenticated users
- 📊 **Dashboard**: User profile and statistics overview

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Axios** - HTTP client
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- Backend server running on `http://localhost:3000`

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create environment file:
   ```bash
   # Create .env.local file
   echo "NEXT_PUBLIC_API_URL=http://localhost:3000" > .env.local
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3001](http://localhost:3001) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Protected dashboard
│   └── layout.tsx         # Root layout with AuthProvider
├── components/
│   └── auth/              # Authentication components
│       ├── LoginForm.tsx
│       ├── RegisterForm.tsx
│       └── ProtectedRoute.tsx
├── contexts/
│   └── AuthContext.tsx    # Authentication context
├── lib/
│   └── api.ts            # API utilities
└── types/
    └── auth.ts           # TypeScript types
```

## Authentication Flow

1. **Landing Page** (`/`) - Redirects to auth or dashboard based on login status
2. **Auth Page** (`/auth`) - Login/Register forms with switching
3. **Dashboard** (`/dashboard`) - Protected route showing user info and stats

## API Integration

The frontend connects to the backend API with the following endpoints:

- `POST /auth/login` - User login
- `POST /auth/register` - User registration  
- `POST /auth/logout` - User logout
- `GET /auth/profile` - Get user profile

## User Schema Integration

The authentication system is built around the backend user schema:

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  plan: 'free' | 'trial' | 'pay_as_you_go' | 'advanced';
  profile_image?: string;
  created_at: string;
  updated_at: string;
}
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Next Steps

- [ ] Add QR code generation functionality
- [ ] Implement file upload and management
- [ ] Add analytics dashboard
- [ ] Create team management features
- [ ] Add billing and subscription management
