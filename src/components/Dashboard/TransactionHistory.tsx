import React from 'react';

interface Transaction {
  date: string;
  description: string;
  amount: string;
}

interface TransactionHistoryProps {
  transactions: Transaction[];
  currentPage: number;
  onPageChange: (page: number) => void;
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ transactions, currentPage, onPageChange }) => {
  return (
    <div className="transaction-history">
      <h3>Transaction History</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        <button onClick={() => onPageChange(currentPage + 1)}>Next</button>
      </div>
    </div>
  );
};

export default TransactionHistory;