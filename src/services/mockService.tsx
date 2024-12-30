// src/services/mockService.ts

import { AccountInfo, FTToken, NFTToken, Transaction } from '../types';

export const fetchAccountInfo = async (): Promise<AccountInfo> => {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        address: '0xABCDEF1234567890',
        totalAssets: 250000,
      });
    }, 500);
  });
};

export const fetchFTHoldings = async (): Promise<FTToken[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 'ft1',
          name: 'Solana Token',
          symbol: 'SOL',
          amount: 1000,
          valueUSD: 250000,
        },
        {
          id: 'ft2',
          name: 'USD Coin',
          symbol: 'USDC',
          amount: 5000,
          valueUSD: 5000,
        },
        // Add more mock FT tokens as needed
      ]);
    }, 500);
  });
};

export const fetchNFTHoldings = async (): Promise<NFTToken[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 'nft1',
          name: 'CryptoPunk #3100',
          imageUrl: 'https://via.placeholder.com/100',
          owner: '0xABCDEF1234567890',
        },
        {
          id: 'nft2',
          name: 'Bored Ape #9055',
          imageUrl: 'https://via.placeholder.com/100',
          owner: '0xABCDEF1234567890',
        },
        // Add more mock NFT tokens as needed
      ]);
    }, 500);
  });
};

export const fetchTransactions = async (page: number, pageSize: number): Promise<{
  transactions: Transaction[];
  total: number;
}> => {
  // Generate mock transactions
  const total = 50; // Total number of transactions
  const transactions: Transaction[] = [];

  for (let i = 1; i <= total; i++) {
    transactions.push({
      id: `tx${i}`,
      type: i % 2 === 0 ? 'Sent' : 'Received',
      amount: Math.random() * 1000,
      token: i % 2 === 0 ? 'SOL' : 'USDC',
      date: new Date(
        Date.now() - i * 1000 * 60 * 60 * 24
      ).toLocaleDateString(),
      from: i % 2 === 0 ? '0xSenderAddress' : undefined,
      to: i % 2 !== 0 ? '0xRecipientAddress' : undefined,
    });
  }

  // Implement pagination
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedTransactions = transactions.slice(start, end);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        transactions: paginatedTransactions,
        total,
      });
    }, 500);
  });
};
