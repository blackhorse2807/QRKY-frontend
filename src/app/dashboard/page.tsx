'use client';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { useAuth } from '@/contexts/AuthContext';
import { LogOut, User, Mail, Crown } from 'lucide-react';

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}

function DashboardContent() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">QRky Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700">Welcome,</span>
                <span className="text-sm font-medium text-gray-900">{user?.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* User Profile Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Profile</h3>
                    <p className="text-sm text-gray-500">Account information</p>
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-700">{user?.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Crown className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-700 capitalize">{user?.plan} Plan</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <User className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-700 capitalize">{user?.role}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Quick Stats</h3>
                <div className="mt-4 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">QR Codes Created</span>
                    <span className="text-sm font-medium text-gray-900">0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Total Scans</span>
                    <span className="text-sm font-medium text-gray-900">0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Tokens Remaining</span>
                    <span className="text-sm font-medium text-gray-900">-</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">No recent activity</p>
                </div>
              </div>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="mt-8 bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to QRky!</h2>
              <p className="text-gray-600 mb-4">
                You&apos;re all set up and ready to start creating beautiful QR codes. Here&apos;s what you can do:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Create static and dynamic QR codes</li>
                <li>Customize QR code styles and colors</li>
                <li>Track QR code analytics and scans</li>
                <li>Manage your projects and files</li>
                <li>Upgrade your plan for more features</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 