CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(100),
    Age NUMBER,
    Balance NUMBER,
    IsVIP VARCHAR2(5)
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    InterestRate NUMBER,
    DueDate DATE,
    CONSTRAINT fk_customer
        FOREIGN KEY (CustomerID)
        REFERENCES Customers(CustomerID)
);

CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    AccountType VARCHAR2(20),
    Balance NUMBER
);

CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    EmployeeName VARCHAR2(100),
    Department VARCHAR2(50),
    Salary NUMBER
);