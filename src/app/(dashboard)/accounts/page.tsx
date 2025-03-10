import React from 'react';
import { 
  PlusIcon, 
  BanknotesIcon, 
  CreditCardIcon, 
  WalletIcon, 
  BuildingLibraryIcon 
} from '@heroicons/react/24/outline';

export default function Accounts() {
  // Mock data for accounts
  const accounts = [
    { 
      id: 1, 
      name: 'Main Checking', 
      balance: 2500.75, 
      type: 'BANK_ACCOUNT',
      institution: 'Chase Bank',
      lastUpdated: '2023-03-10'
    },
    { 
      id: 2, 
      name: 'Savings', 
      balance: 15000.00, 
      type: 'BANK_ACCOUNT',
      institution: 'Chase Bank',
      lastUpdated: '2023-03-10'
    },
    { 
      id: 3, 
      name: 'Credit Card', 
      balance: -450.25, 
      type: 'CREDIT_CARD',
      institution: 'American Express',
      lastUpdated: '2023-03-09'
    },
    { 
      id: 4, 
      name: 'Cash', 
      balance: 200.00, 
      type: 'CASH',
      institution: 'N/A',
      lastUpdated: '2023-03-08'
    },
    { 
      id: 5, 
      name: 'Investment Account', 
      balance: 8750.50, 
      type: 'INVESTMENT',
      institution: 'Vanguard',
      lastUpdated: '2023-03-07'
    },
    { 
      id: 6, 
      name: 'Digital Wallet', 
      balance: 125.30, 
      type: 'DIGITAL_WALLET',
      institution: 'PayPal',
      lastUpdated: '2023-03-06'
    },
  ];

  // Function to get icon based on account type
  const getAccountIcon = (type: string) => {
    switch (type) {
      case 'BANK_ACCOUNT':
        return <BuildingLibraryIcon className="h-8 w-8 text-blue-600" />;
      case 'CREDIT_CARD':
        return <CreditCardIcon className="h-8 w-8 text-purple-600" />;
      case 'CASH':
        return <BanknotesIcon className="h-8 w-8 text-green-600" />;
      case 'INVESTMENT':
        return <BuildingLibraryIcon className="h-8 w-8 text-orange-600" />;
      case 'DIGITAL_WALLET':
        return <WalletIcon className="h-8 w-8 text-cyan-600" />;
      default:
        return <BanknotesIcon className="h-8 w-8 text-gray-600" />;
    }
  };

  // Calculate total balance
  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Accounts</h1>
        <p className="text-gray-600">Manage your financial accounts.</p>
      </div>

      {/* Summary Card */}
      <div className="card mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Total Balance Across All Accounts</p>
            <p className="text-3xl font-bold text-gray-900">${totalBalance.toFixed(2)}</p>
          </div>
          <button className="btn btn-primary flex items-center">
            <PlusIcon className="h-5 w-5 mr-1" />
            Add Account
          </button>
        </div>
      </div>

      {/* Accounts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accounts.map((account) => (
          <div key={account.id} className="card hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  {getAccountIcon(account.type)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{account.name}</h3>
                  <p className="text-sm text-gray-500">{account.institution}</p>
                </div>
              </div>
              <div className="flex space-x-1">
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
                <button className="p-1 text-gray-400 hover:text-red-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-500">Balance</span>
                <span className="text-sm text-gray-500">Last updated: {account.lastUpdated}</span>
              </div>
              <p className={`text-2xl font-bold ${account.balance >= 0 ? 'text-gray-900' : 'text-red-600'}`}>
                ${account.balance.toFixed(2)}
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between">
                <button className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                  View Transactions
                </button>
                <button className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                  Update Balance
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Account Card */}
      <div className="mt-6">
        <button className="w-full border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-primary-100 p-3 rounded-full mb-2">
              <PlusIcon className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Add a new account</h3>
            <p className="text-sm text-gray-500 mt-1">Track your finances across all your accounts</p>
          </div>
        </button>
      </div>
    </div>
  );
} 