// src/components/FTHoldingsTable/FTHoldingsTable.tsx

import React from 'react';
import { FTToken } from '../../types';
import styles from './FTHoldingsTable.module.css';

interface FTHoldingsTableProps {
  ftHoldings: FTToken[];
}

const FTHoldingsTable: React.FC<FTHoldingsTableProps> = ({ ftHoldings }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Token</th>
          <th>Symbol</th>
          <th>Amount</th>
          <th>Value (USD)</th>
        </tr>
      </thead>
      <tbody>
        {ftHoldings.map((token) => (
          <tr key={token.id}>
            <td>{token.name}</td>
            <td>{token.symbol}</td>
            <td>{token.amount}</td>
            <td>${token.valueUSD.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FTHoldingsTable;
