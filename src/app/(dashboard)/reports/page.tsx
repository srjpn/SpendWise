import React from 'react';
import { 
  ArrowDownTrayIcon, 
  CalendarIcon, 
  ChartBarIcon, 
  ChartPieIcon 
} from '@heroicons/react/24/outline';

export default function Reports() {
  // Mock data for reports
  const categories = [
    { name: 'Food', amount: 450.25, percentage: 25 },
    { name: 'Housing', amount: 800.00, percentage: 45 },
    { name: 'Transportation', amount: 200.50, percentage: 11 },
    { name: 'Entertainment', amount: 150.75, percentage: 8 },
    { name: 'Utilities', amount: 120.50, percentage: 7 },
    { name: 'Other', amount: 75.00, percentage: 4 },
  ];

  const monthlyData = [
    { month: 'Jan', income: 3000, expenses: 2200 },
    { month: 'Feb', income: 3200, expenses: 2300 },
    { month: 'Mar', income: 3100, expenses: 2100 },
    { month: 'Apr', income: 3300, expenses: 2400 },
    { month: 'May', income: 3500, expenses: 2600 },
    { month: 'Jun', income: 3400, expenses: 2500 },
  ];

  // Calculate totals
  const totalExpenses = categories.reduce((sum, category) => sum + category.amount, 0);
  const totalIncome = monthlyData.reduce((sum, month) => sum + month.income, 0);
  const totalSpent = monthlyData.reduce((sum, month) => sum + month.expenses, 0);
  const savingsRate = ((totalIncome - totalSpent) / totalIncome) * 100;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
        <p className="text-gray-600">Analyze your financial data and gain insights.</p>
      </div>

      {/* Time Period Selector */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center space-x-2">
            <button className="btn btn-primary flex items-center">
              <CalendarIcon className="h-5 w-5 mr-1" />
              Last 6 Months
            </button>
            <button className="btn btn-secondary">This Year</button>
            <button className="btn btn-secondary">Custom</button>
          </div>
          <button className="btn btn-secondary flex items-center">
            <ArrowDownTrayIcon className="h-5 w-5 mr-1" />
            Export Data
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Income</p>
              <p className="text-2xl font-bold text-gray-900">${totalIncome.toFixed(2)}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <ChartBarIcon className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Expenses</p>
              <p className="text-2xl font-bold text-gray-900">${totalSpent.toFixed(2)}</p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <ChartBarIcon className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Savings Rate</p>
              <p className="text-2xl font-bold text-primary-600">{savingsRate.toFixed(1)}%</p>
            </div>
            <div className="bg-primary-100 p-3 rounded-full">
              <ChartPieIcon className="h-6 w-6 text-primary-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Income vs Expenses Chart */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Income vs Expenses</h3>
          <div className="h-64 flex items-end justify-between space-x-2">
            {monthlyData.map((month, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div className="w-full flex flex-col items-center space-y-1">
                  <div 
                    className="w-full bg-green-500 rounded-t" 
                    style={{ height: `${(month.income / 4000) * 200}px` }}
                  ></div>
                  <div 
                    className="w-full bg-red-500 rounded-t" 
                    style={{ height: `${(month.expenses / 4000) * 200}px` }}
                  ></div>
                </div>
                <div className="text-xs font-medium text-gray-500 mt-2">{month.month}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center space-x-6">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Income</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Expenses</span>
            </div>
          </div>
        </div>

        {/* Expense Categories Chart */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Expense Categories</h3>
          <div className="space-y-4">
            {categories.map((category, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700">{category.name}</span>
                  <span className="text-sm font-medium text-gray-700">
                    ${category.amount.toFixed(2)} ({category.percentage}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-primary-600 h-2.5 rounded-full" 
                    style={{ width: `${category.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Trends */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Insights</h3>
        <div className="space-y-4">
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h4 className="font-medium text-green-800">Positive Trends</h4>
            <ul className="mt-2 list-disc list-inside text-sm text-green-700">
              <li>Your savings rate has increased by 5% compared to last month</li>
              <li>Food expenses have decreased by $50 compared to your monthly average</li>
              <li>Income has been steadily increasing over the past 3 months</li>
            </ul>
          </div>
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <h4 className="font-medium text-red-800">Areas for Improvement</h4>
            <ul className="mt-2 list-disc list-inside text-sm text-red-700">
              <li>Entertainment expenses have increased by 15% compared to last month</li>
              <li>You've spent more on transportation than your budgeted amount</li>
              <li>Consider reducing discretionary spending to increase your savings rate</li>
            </ul>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-800">Recommendations</h4>
            <ul className="mt-2 list-disc list-inside text-sm text-blue-700">
              <li>Set up automatic transfers to your savings account</li>
              <li>Review your subscription services for potential savings</li>
              <li>Consider creating a budget for categories with higher spending</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 