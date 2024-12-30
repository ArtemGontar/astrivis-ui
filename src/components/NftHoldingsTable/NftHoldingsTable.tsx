// src/components/NFTHoldingsTable/NFTHoldingsTable.tsx

import React from 'react';
import { NFTToken } from '../../types';
import styles from './NFTHoldingsTable.module.css';

interface NFTHoldingsTableProps {
  nftHoldings: NFTToken[];
}

const NFTHoldingsTable: React.FC<NFTHoldingsTableProps> = ({ nftHoldings }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Owner</th>
        </tr>
      </thead>
      <tbody>
        {nftHoldings.map((nft) => (
          <tr key={nft.id}>
            <td>
              <img src={nft.imageUrl} alt={nft.name} className={styles.image} />
            </td>
            <td>{nft.name}</td>
            <td>{nft.owner}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NFTHoldingsTable;
