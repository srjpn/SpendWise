import React from 'react';
import { 
  ArrowUpIcon, 
  ArrowDownIcon, 
  BanknotesIcon, 
  CreditCardIcon 
} from '@heroicons/react/24/outline';

export default function Dashboard() {
  // Mock data for the dashboard
  const accounts = [
    { id: 1, name: 'Main Checking', balance: 2500.75, type: 'BANK_ACCOUNT' },
    { id: 2, name: 'Savings', balance: 15000.00, type: 'BANK_ACCOUNT' },
    { id: 3, name: 'Credit Card', balance: -450.25, type: 'CREDIT_CARD' },
    { id: 4, name: 'Cash', balance: 200.00, type: 'CASH' },
  ];

  const recentTransactions = [
    { id: 1, description: 'Grocery Store', amount: -85.75, date: '2023-03-08', category: 'Food' },
    { id: 2, description: 'Salary', amount: 3200.00, date: '2023-03-01', category: 'Income' },
    { id: 3, description: 'Electric Bill', amount: -120.50, date: '2023-03-05', category: 'Utilities' },
    { id: 4, description: 'Restaurant', amount: -45.80, date: '2023-03-07', category: 'Food' },
    { id: 5, description: 'Gas Station', amount: -35.40, date: '2023-03-06', category: 'Transportation' },
  ];

  // Calculate total balance
  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);
  
  // Calculate monthly income and expenses
  const monthlyIncome = recentTransactions
    .filter(t => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);
  
  const monthlyExpenses = recentTransactions
    .filter(t => t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's an overview of your finances.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Balance</p>
              <p className="text-2xl font-bold text-gray-900">${totalBalance.toFixed(2)}</p>
            </div>
            <div className="bg-primary-100 p-3 rounded-full">
              <BanknotesIcon className="h-6 w-6 text-primary-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Monthly Income</p>
              <p className="text-2xl font-bold text-green-600">${monthlyIncome.toFixed(2)}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <ArrowUpIcon className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Monthly Expenses</p>
              <p className="text-2xl font-bold text-red-600">${monthlyExpenses.toFixed(2)}</p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <ArrowDownIcon className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Savings Rate</p>
              <p className="text-2xl font-bold text-primary-600">
                {monthlyIncome > 0 
                  ? `${(((monthlyIncome - monthlyExpenses) / monthlyIncome) * 100).toFixed(1)}%` 
                  : '0%'}
              </p>
            </div>
            <div className="bg-primary-100 p-3 rounded-full">
              <CreditCardIcon className="h-6 w-6 text-primary-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Accounts Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Your Accounts</h2>
          <button className="btn btn-secondary text-sm">+ Add Account</button>
        </div>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Account Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Balance
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {accounts.map((account) => (
                <tr key={account.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{account.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {account.type.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className={`text-sm font-medium ${account.balance >= 0 ? 'text-gray-900' : 'text-red-600'}`}>
                      ${account.balance.toFixed(2)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Transactions Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
          <button className="btn btn-secondary text-sm">View All</button>
        </div>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentTransactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{transaction.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                      {transaction.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{transaction.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className={`text-sm font-medium ${transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.amount >= 0 ? '+' : ''}${transaction.amount.toFixed(2)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 