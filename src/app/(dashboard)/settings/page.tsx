import React from 'react';
import { 
  UserIcon, 
  BellIcon, 
  ShieldCheckIcon, 
  CurrencyDollarIcon, 
  DocumentDuplicateIcon 
} from '@heroicons/react/24/outline';

export default function Settings() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Manage your account preferences and settings.</p>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="divide-y divide-gray-200">
          {/* Profile Section */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-primary-100 p-2 rounded-full mr-3">
                  <UserIcon className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>
              </div>
              <button className="btn btn-secondary text-sm">Edit</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <p className="text-gray-900">John Doe</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <p className="text-gray-900">john.doe@example.com</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <p className="text-gray-900">+1 (555) 123-4567</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date Joined</label>
                <p className="text-gray-900">January 15, 2023</p>
              </div>
            </div>
          </div>

          {/* Currency Settings */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-primary-100 p-2 rounded-full mr-3">
                  <CurrencyDollarIcon className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-lg font-medium text-gray-900">Currency Settings</h2>
              </div>
              <button className="btn btn-secondary text-sm">Edit</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Default Currency</label>
                <p className="text-gray-900">USD - United States Dollar</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Currency Format</label>
                <p className="text-gray-900">$1,234.56</p>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-primary-100 p-2 rounded-full mr-3">
                  <BellIcon className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-lg font-medium text-gray-900">Notification Settings</h2>
              </div>
              <button className="btn btn-secondary text-sm">Edit</button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-900 font-medium">Email Notifications</p>
                  <p className="text-sm text-gray-500">Receive email notifications for important updates</p>
                </div>
                <div className="relative inline-block w-12 h-6 rounded-full bg-green-500">
                  <span className="absolute right-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 transform"></span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-900 font-medium">Monthly Summary</p>
                  <p className="text-sm text-gray-500">Receive a monthly summary of your finances</p>
                </div>
                <div className="relative inline-block w-12 h-6 rounded-full bg-green-500">
                  <span className="absolute right-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 transform"></span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-900 font-medium">Low Balance Alerts</p>
                  <p className="text-sm text-gray-500">Get notified when your account balance is low</p>
                </div>
                <div className="relative inline-block w-12 h-6 rounded-full bg-gray-300">
                  <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 transform"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-primary-100 p-2 rounded-full mr-3">
                  <ShieldCheckIcon className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-lg font-medium text-gray-900">Security Settings</h2>
              </div>
              <button className="btn btn-secondary text-sm">Edit</button>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-gray-900 font-medium">Password</p>
                <p className="text-sm text-gray-500">Last changed 3 months ago</p>
                <button className="mt-2 text-primary-600 text-sm font-medium">Change Password</button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-900 font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                </div>
                <div className="relative inline-block w-12 h-6 rounded-full bg-gray-300">
                  <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 transform"></span>
                </div>
              </div>
              <div>
                <p className="text-gray-900 font-medium">Login Sessions</p>
                <p className="text-sm text-gray-500">You're currently logged in on 1 device</p>
                <button className="mt-2 text-primary-600 text-sm font-medium">Manage Sessions</button>
              </div>
            </div>
          </div>

          {/* Data Export */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-primary-100 p-2 rounded-full mr-3">
                  <DocumentDuplicateIcon className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-lg font-medium text-gray-900">Data Management</h2>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-gray-900 font-medium">Export Data</p>
                <p className="text-sm text-gray-500">Download all your financial data in CSV format</p>
                <button className="mt-2 btn btn-secondary text-sm">Export Data</button>
              </div>
              <div>
                <p className="text-gray-900 font-medium">Delete Account</p>
                <p className="text-sm text-gray-500">Permanently delete your account and all associated data</p>
                <button className="mt-2 btn btn-danger text-sm">Delete Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 