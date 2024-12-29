import React, { useEffect, useState } from 'react';
import AccountInfo from './AccountInfo';
import FTTable from './FtTable';
import NFTTable from './NftTable';
import TransactionHistory from './TransactionHistory';
import { getAccountInfoMock, getFTTokensMock, getNFTTokensMock, getTransactionHistoryMock } from '../../services/mockService';

const Dashboard: React.FC = () => {
  const [accountInfo, setAccountInfo] = useState<{ address: string; totalAssets: string } | null>(null);
  const [ftTokens, setFTTokens] = useState<{ name: string; balance: string }[]>([]);
  const [nftTokens, setNFTTokens] = useState<{ name: string; value: string }[]>([]);
  const [transactionHistory, setTransactionHistory] = useState<{ date: string; description: string; amount: string }[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setAccountInfo(getAccountInfoMock());
    setFTTokens(getFTTokensMock());
    setNFTTokens(getNFTTokensMock());
    setTransactionHistory(getTransactionHistoryMock(page));
  }, [page]);

  return (
    <div className="dashboard">
      {accountInfo && <AccountInfo address={accountInfo.address} totalAssets={accountInfo.totalAssets} />}
      <FTTable tokens={ftTokens} />
      <NFTTable tokens={nftTokens} />
      <TransactionHistory transactions={transactionHistory} currentPage={page} onPageChange={setPage} />
    </div>
  );
};

export default Dashboard;
