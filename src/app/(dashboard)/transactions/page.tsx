import React from 'react';
import { 
  FunnelIcon, 
  PlusIcon, 
  ArrowUpIcon, 
  ArrowDownIcon, 
  ArrowsRightLeftIcon 
} from '@heroicons/react/24/outline';

export default function Transactions() {
  // Mock data for transactions
  const transactions = [
    { 
      id: 1, 
      description: 'Grocery Store', 
      amount: -85.75, 
      date: '2023-03-08', 
      category: 'Food', 
      account: 'Main Checking',
      type: 'EXPENSE'
    },
    { 
      id: 2, 
      description: 'Salary', 
      amount: 3200.00, 
      date: '2023-03-01', 
      category: 'Income', 
      account: 'Main Checking',
      type: 'INCOME'
    },
    { 
      id: 3, 
      description: 'Electric Bill', 
      amount: -120.50, 
      date: '2023-03-05', 
      category: 'Utilities', 
      account: 'Main Checking',
      type: 'EXPENSE'
    },
    { 
      id: 4, 
      description: 'Restaurant', 
      amount: -45.80, 
      date: '2023-03-07', 
      category: 'Food', 
      account: 'Credit Card',
      type: 'EXPENSE'
    },
    { 
      id: 5, 
      description: 'Gas Station', 
      amount: -35.40, 
      date: '2023-03-06', 
      category: 'Transportation', 
      account: 'Credit Card',
      type: 'EXPENSE'
    },
    { 
      id: 6, 
      description: 'Transfer to Savings', 
      amount: -500.00, 
      date: '2023-03-03', 
      category: 'Transfer', 
      account: 'Main Checking',
      type: 'TRANSFER'
    },
    { 
      id: 7, 
      description: 'Transfer from Checking', 
      amount: 500.00, 
      date: '2023-03-03', 
      category: 'Transfer', 
      account: 'Savings',
      type: 'TRANSFER'
    },
    { 
      id: 8, 
      description: 'Loan to Friend', 
      amount: -200.00, 
      date: '2023-03-02', 
      category: 'Loan', 
      account: 'Cash',
      type: 'LOAN'
    },
    { 
      id: 9, 
      description: 'Loan Repayment from Friend', 
      amount: 100.00, 
      date: '2023-03-09', 
      category: 'Loan Repayment', 
      account: 'Cash',
      type: 'REPAYMENT'
    },
    { 
      id: 10, 
      description: 'Online Shopping', 
      amount: -65.99, 
      date: '2023-03-04', 
      category: 'Shopping', 
      account: 'Credit Card',
      type: 'EXPENSE'
    },
  ];

  // Function to get icon based on transaction type
  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'INCOME':
        return <ArrowUpIcon className="h-5 w-5 text-green-600" />;
      case 'EXPENSE':
        return <ArrowDownIcon className="h-5 w-5 text-red-600" />;
      case 'TRANSFER':
        return <ArrowsRightLeftIcon className="h-5 w-5 text-blue-600" />;
      case 'LOAN':
        return <ArrowUpIcon className="h-5 w-5 text-orange-600" />;
      case 'REPAYMENT':
        return <ArrowDownIcon className="h-5 w-5 text-purple-600" />;
      default:
        return <ArrowDownIcon className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>
        <p className="text-gray-600">View and manage your financial transactions.</p>
      </div>

      {/* Actions Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div className="flex items-center space-x-2">
          <button className="btn btn-primary flex items-center">
            <PlusIcon className="h-5 w-5 mr-1" />
            Add Transaction
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search transactions..."
              className="input pr-10"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <button className="btn btn-secondary flex items-center">
            <FunnelIcon className="h-5 w-5 mr-1" />
            Filter
          </button>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Account
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{transaction.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-2">
                      {getTransactionIcon(transaction.type)}
                    </div>
                    <div className="text-sm font-medium text-gray-900">{transaction.description}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                    {transaction.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{transaction.account}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className={`text-sm font-medium ${transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {transaction.amount >= 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-primary-600 hover:text-primary-900 mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <div className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">20</span> results
        </div>
        <div className="flex space-x-2">
          <button className="btn btn-secondary">Previous</button>
          <button className="btn btn-primary">Next</button>
        </div>
      </div>
    </div>
  );
} 