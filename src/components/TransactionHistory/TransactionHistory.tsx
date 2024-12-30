// src/components/TransactionHistory/TransactionHistory.tsx

import React from 'react';
import { Transaction } from '../../types';
import styles from './TransactionHistory.module.css';

interface TransactionHistoryProps {
  transactions: Transaction[];
  total: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({
  transactions,
  total,
  currentPage,
  pageSize,
  onPageChange,
}) => {
  const totalPages = Math.ceil(total / pageSize);

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Token</th>
            <th>Amount</th>
            <th>Date</th>
            <th>From/To</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id}>
              <td>{tx.type}</td>
              <td>{tx.token}</td>
              <td>{tx.amount.toFixed(2)}</td>
              <td>{tx.date}</td>
              <td>{tx.type === 'Sent' ? tx.from : tx.to}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.pagination}>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default TransactionHistory;