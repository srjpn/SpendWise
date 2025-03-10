import React from 'react';
import Link from 'next/link';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex justify-center py-4">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary-600">SpendWise</span>
        </Link>
      </div>
      {children}
    </div>
  );
} 