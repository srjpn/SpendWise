# SpendWise Database Documentation

## Overview
This document details the database schema for SpendWise, a personal finance management application. The schema is designed to support personal finance tracking with features including expense tracking, loan management, and recurring transactions.

## Entity Relationship Diagram
[Consider adding an ERD diagram here]

## Database Entities

### Users
The core user entity that owns all personal finance data.

| Column | Type | Description | Constraints |
|--------|------|-------------|-------------|
| id | UUID | Unique identifier | PRIMARY KEY |
| username | VARCHAR(50) | User's username | UNIQUE, NOT NULL |
| email | VARCHAR(255) | User's email address | UNIQUE, NOT NULL |
| default_currency_id | UUID | Reference to default currency | FOREIGN KEY |
| created_at | TIMESTAMP | Record creation timestamp | NOT NULL |
| updated_at | TIMESTAMP | Record update timestamp | NOT NULL |

### Accounts
Represents different types of financial accounts owned by users.

| Column | Type | Description | Constraints |
|--------|------|-------------|-------------|
| id | UUID | Unique identifier | PRIMARY KEY |
| user_id | UUID | Reference to user | FOREIGN KEY |
| name | VARCHAR(100) | Account name | NOT NULL |
| type | ENUM | Account type: 'CASH', 'BANK_ACCOUNT', 'CREDIT_CARD', 'DIGITAL_WALLET', 'INVESTMENT' | NOT NULL |
| balance | DECIMAL(15,2) | Current balance | NOT NULL |
| currency_id | UUID | Reference to currency | FOREIGN KEY |
| is_active | BOOLEAN | Account status | DEFAULT TRUE |
| created_at | TIMESTAMP | Record creation timestamp | NOT NULL |
| updated_at | TIMESTAMP | Record update timestamp | NOT NULL |

### Transactions
Records all financial transactions.

| Column | Type | Description | Constraints |
|--------|------|-------------|-------------|
| id | UUID | Unique identifier | PRIMARY KEY |
| user_id | UUID | Reference to user | FOREIGN KEY |
| from_account_id | UUID | Source account | FOREIGN KEY |
| to_account_id | UUID | Destination account (for transfers) | FOREIGN KEY, NULLABLE |
| amount | DECIMAL(15,2) | Transaction amount | NOT NULL |
| type | ENUM | Transaction type: 'EXPENSE', 'INCOME', 'TRANSFER', 'LOAN', 'REPAYMENT' | NOT NULL |
| category_id | UUID | Reference to category | FOREIGN KEY |
| description | TEXT | Transaction description | |
| date | DATE | Transaction date | NOT NULL |
| status | ENUM | Status: 'COMPLETED', 'PENDING', 'CANCELLED' | NOT NULL |
| created_at | TIMESTAMP | Record creation timestamp | NOT NULL |
| updated_at | TIMESTAMP | Record update timestamp | NOT NULL |

### Categories
Categorizes transactions for better organization and reporting.

| Column | Type | Description | Constraints |
|--------|------|-------------|-------------|
| id | UUID | Unique identifier | PRIMARY KEY |
| user_id | UUID | Reference to user | FOREIGN KEY |
| name | VARCHAR(50) | Category name | NOT NULL |
| type | ENUM | Category type: 'EXPENSE', 'INCOME' | NOT NULL |
| icon | VARCHAR(50) | Icon identifier | |
| color | VARCHAR(7) | Color code (hex) | |
| is_default | BOOLEAN | Whether it's a system default category | DEFAULT FALSE |
| created_at | TIMESTAMP | Record creation timestamp | NOT NULL |
| updated_at | TIMESTAMP | Record update timestamp | NOT NULL |

### Tags
Flexible labeling system for transactions.

| Column | Type | Description | Constraints |
|--------|------|-------------|-------------|
| id | UUID | Unique identifier | PRIMARY KEY |
| user_id | UUID | Reference to user | FOREIGN KEY |
| name | VARCHAR(50) | Tag name | NOT NULL |
| created_at | TIMESTAMP | Record creation timestamp | NOT NULL |
| updated_at | TIMESTAMP | Record update timestamp | NOT NULL |

### TransactionTags
Many-to-many relationship between transactions and tags.

| Column | Type | Description | Constraints |
|--------|------|-------------|-------------|
| transaction_id | UUID | Reference to transaction | PRIMARY KEY, FOREIGN KEY |
| tag_id | UUID | Reference to tag | PRIMARY KEY, FOREIGN KEY |

### LinkedTransactions
Connects related transactions (e.g., loans and repayments).

| Column | Type | Description | Constraints |
|--------|------|-------------|-------------|
| id | UUID | Unique identifier | PRIMARY KEY |
| primary_transaction_id | UUID | Reference to primary transaction | FOREIGN KEY |
| linked_transaction_id | UUID | Reference to linked transaction | FOREIGN KEY |
| relationship_type | ENUM | Type: 'LOAN_REPAYMENT', 'REFUND', 'REIMBURSEMENT' | NOT NULL |
| created_at | TIMESTAMP | Record creation timestamp | NOT NULL |

### Currencies
Supported currencies in the system.

| Column | Type | Description | Constraints |
|--------|------|-------------|-------------|
| id | UUID | Unique identifier | PRIMARY KEY |
| code | VARCHAR(3) | Currency code (e.g., USD) | UNIQUE, NOT NULL |
| name | VARCHAR(50) | Currency name | NOT NULL |
| symbol | VARCHAR(5) | Currency symbol | NOT NULL |
| created_at | TIMESTAMP | Record creation timestamp | NOT NULL |
| updated_at | TIMESTAMP | Record update timestamp | NOT NULL |

### RecurringTransactions
Template for automatically generated regular transactions.

| Column | Type | Description | Constraints |
|--------|------|-------------|-------------|
| id | UUID | Unique identifier | PRIMARY KEY |
| user_id | UUID | Reference to user | FOREIGN KEY |
| amount | DECIMAL(15,2) | Transaction amount | NOT NULL |
| from_account_id | UUID | Source account | FOREIGN KEY |
| to_account_id | UUID | Destination account | FOREIGN KEY, NULLABLE |
| category_id | UUID | Reference to category | FOREIGN KEY |
| description | TEXT | Transaction description | |
| frequency | ENUM | Frequency: 'DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY' | NOT NULL |
| start_date | DATE | Start date | NOT NULL |
| end_date | DATE | End date | NULLABLE |
| last_generated | TIMESTAMP | Last generation timestamp | |
| status | ENUM | Status: 'ACTIVE', 'PAUSED', 'CANCELLED' | NOT NULL |
| created_at | TIMESTAMP | Record creation timestamp | NOT NULL |
| updated_at | TIMESTAMP | Record update timestamp | NOT NULL |

## Indexes

### Primary Indexes
- All tables have primary key indexes on their `id` columns

### Foreign Key Indexes
- All foreign key columns are indexed

### Performance Indexes
1. Transactions
   - (user_id, date)
   - (user_id, category_id)
   - (from_account_id, date)
   - (to_account_id, date)

2. Categories
   - (user_id, type)
   - (user_id, name) [unique]

3. RecurringTransactions
   - (user_id, status)

## Notes
1. All timestamps are stored in UTC
2. Monetary values use DECIMAL(15,2) for precision
3. UUIDs are used as primary keys for better distribution and security
4. All foreign keys have ON DELETE RESTRICT unless specified otherwise
