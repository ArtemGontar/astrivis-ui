// src/components/Dashboard/Dashboard.tsx

import React, { useEffect, useState } from 'react';
import styles from './Dashboard.module.css';
import {
  AccountInfo,
  FTToken,
  NFTToken,
  Transaction,
} from '../../types';
import {
  fetchAccountInfo,
  fetchTransactions,
} from '../../services/mockService';
import FTHoldingsTable from '../FtHoldingsTable/FtHoldingsTable';
import NFTHoldingsTable from '../NftHoldingsTable/NftHoldingsTable';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

const Dashboard: React.FC = () => {
  const [accountInfo, setAccountInfo] = useState<AccountInfo | null>(null);
  const [ftHoldings, setFtHoldings] = useState<FTToken[]>([]);
  const [nftHoldings, setNftHoldings] = useState<NFTToken[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [totalTransactions, setTotalTransactions] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 10;
  const walletAddress = 'Gbfudd5GxrcHXJK1Ab96ZsGLwXEt6etjqQmozmu1C91Y'; // Example wallet address

  useEffect(() => {
    const loadAccountInfo = async () => {
      const data = await fetchAccountInfo(walletAddress);
      setAccountInfo(data);
    };

    const loadTransactions = async (page: number) => {
      const data = await fetchTransactions(page, pageSize);
      setTransactions(data);
      setTotalTransactions(100);
    };

    loadAccountInfo();
    loadTransactions(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (!accountInfo) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.accountInfo}>
        <h2>Account Information</h2>
        <p><strong>Address:</strong> {accountInfo.address}</p>
        <p><strong>Total Assets:</strong> ${accountInfo.totalAssets.toLocaleString()}</p>
      </div>

      <div className={styles.holdings}>
        <div className={styles.ftHoldings}>
          <h3>FT Holdings</h3>
          <FTHoldingsTable ftHoldings={accountInfo.fungibleTokens} />
        </div>
        <div className={styles.nftHoldings}>
          <h3>NFT Holdings</h3>
          <NFTHoldingsTable nftHoldings={accountInfo.nonFungibleTokens} />
        </div>
      </div>

      <div className={styles.transactions}>
        <h3>Transaction History</h3>
        <TransactionHistory
          transactions={transactions}
          total={totalTransactions}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Dashboard;
