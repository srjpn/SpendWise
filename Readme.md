# SpendWise

## Table of Contents
- [SpendWise](#spendwise)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Tech Stack](#tech-stack)
    - [Backend](#backend)
    - [Frontend](#frontend)
    - [Tools](#tools)
  - [Setup](#setup)
  - [Use Case Gude](#use-case-gude)
  - [Database Model](#database-model)
  - [Features](#features)
  - [Future Enhancements](#future-enhancements)

---

## Description
SpendWise is a personal expense tracking application designed to make managing your finances simple and effective. The app provides tools to record, track, and analyze expenses, income, loans, and reimbursements, ensuring clarity in financial transactions. With SpendWise, you can:
- Maintain a comprehensive record of your transactions.
- Categorize expenses and income for easy analysis.
- Handle complex scenarios like loans, refunds, and reimbursements.
- Gain insights into your spending habits.

---

## Tech Stack
### Backend
- **Framework**: Node.js with NestJS  
- **Database**: PostgreSQL  
- **ORM**: TypeORM  

### Frontend
- **Framework**: React with Next.js  
- **Styling**: Tailwind CSS  

### Tools
- **Version Control**: Git and GitHub  
- **Deployment**: Docker, AWS  
- **Documentation**: Swagger for API Documentation  

---

## Setup
1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/spendwise.git
   cd spendwise
   ```

2. **Backend Setup**
   - Navigate to the backend directory:  
     ```bash
     cd backend
     ```
   - Install dependencies:  
     ```bash
     npm install
     ```
   - Configure environment variables (use `.env.example` as a template).  
   - Run migrations:  
     ```bash
     npm run migrate
     ```
   - Start the backend server:  
     ```bash
     npm run start:dev
     ```

3. **Frontend Setup**
   - Navigate to the frontend directory:  
     ```bash
     cd frontend
     ```
   - Install dependencies:  
     ```bash
     npm install
     ```
   - Configure environment variables (use `.env.example` as a template).  
   - Start the frontend server:  
     ```bash
     npm run dev
     ```

4. **Access the Application**
   - Open your browser and navigate to: [http://localhost:3000](http://localhost:3000)

---

## Use Case Gude
Detailed use cases and how they are managed within SpendWise can be found in the [Use Case Guide](./docs/use_case_guide.md).

---

## Database Model
An in-depth description of the database model, including schema diagrams and relationships, is available in the [Database Model Document](./docs/database_models.md).

---

## Features
- **Expense and Income Tracking**: Record transactions with detailed attributes such as category, payment method, and tags.  
- **Loan Management**: Track loans, repayments, and interest.  
- **Refunds and Reimbursements**: Link related transactions for clarity.  
- **Credit Card Tracking**: Record purchases and repayments.  
- **Categorization and Tagging**: Organize transactions for better insights.  
- **Transaction Linking**: Connect related transactions for better context.  

---

## Future Enhancements
- **Budgeting**: Set monthly budgets and track adherence.  
- **Reports and Analytics**: Generate visual reports to analyze spending patterns.  
- **Multi-Currency Support**: Seamlessly manage transactions in different currencies.  
- **Mobile App**: Develop a mobile-friendly interface.  
- **Recurring Transactions**: Automate recurring expenses and income.  

---