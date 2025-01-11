# Use Case Guide

This document provides a comprehensive list of financial use cases and how they are managed within SpendWise. Each use case includes a brief description and the approach taken to handle it in the system.

---

## Table of Contents
1. [Lending and Borrowing Money](#lending-and-borrowing-money)
2. [Refunds](#refunds)
3. [Reimbursements](#reimbursements)
4. [Loans and EMI Payments](#loans-and-emi-payments)
5. [Credit Card Transactions and Repayments](#credit-card-transactions-and-repayments)

---

## 1. Lending and Borrowing Money
### Description
You lend money to someone, and they repay it later. For example, you lend ₹100 to someone this month, and they repay it the next month.

### Solution
- Record the lending as an **expense** transaction.
- Record the repayment as an **income** transaction.
- Use the `linked_transaction_id` field to associate the two transactions for better tracking.

---

## 2. Refunds
### Description
You make a purchase but later receive a partial or full refund. For example, you book a bus ticket for ₹500 but cancel it and get a refund of ₹400.

### Solution
- Record the initial purchase as an **expense** transaction.
- Record the refund as an **income** transaction.
- Link the two transactions using `linked_transaction_id` for clarity.

---

## 3. Reimbursements
### Description
You pay for something on behalf of someone (e.g., work-related expenses) and get reimbursed later.

### Solution
- Record the initial payment as an **expense** transaction.
- Record the reimbursement as an **income** transaction.
- Link the two transactions using `linked_transaction_id` to indicate they are related.

---

## 4. Loans and EMI Payments
### Description
You take a loan (e.g., for buying a phone) and repay it in installments (EMIs). For example, you purchase a phone on EMI for 6 months.

### Solution
- Record the loan details in the `loan` table, including the total amount and EMI schedule.
- Each EMI payment is recorded as an **expense** transaction.
- Link the EMI transactions to the corresponding loan entry in the `loan` table using `loan_id`.

---

## 5. Credit Card Transactions and Repayments
### Description
You make purchases using your credit card and later repay the card bill. For example, you spend ₹10,000 using your credit card and repay it in full the next month.

### Solution
- Record each purchase as an **expense** transaction, specifying the `payment_method` as "Credit Card."
- Record the repayment as a **credit_card_repayment** transaction type in the `transaction` table.
- Use `credit_card_id` to link the repayment to the relevant credit card and its associated purchases.

---
