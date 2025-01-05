import { AccountInfo, FTToken, NFTToken, Transaction } from '../types';

export const fetchAccountInfo = async (walletAddress: string): Promise<AccountInfo> => {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        address: 'Gbfudd5GxrcHXJK1Ab96ZsGLwXEt6etjqQmozmu1C91Y',
        totalAssets: 1.331861972,
        fungibleTokens: [
          {
            id: '00000000-0000-0000-0000-000000000001',
            name: 'USDC',
            symbol: 'USDC',
            amount: 1.143499738,
            valueUSD: 1.143499738,
            tokenAddress: '3VkR66qkbAQXwguaKYXHDRPtHuxyU1cXkkkDcJSzhkr8',
            balance: 0.18836223429349,
          },
          {
            id: '00000000-0000-0000-0000-000000000002',
            name: 'USDC',
            symbol: 'USDC',
            amount: 1.143499738,
            valueUSD: 1.143499738,
            tokenAddress: '5mWu7wP3fcSshfRHtXJxoBLGPXzkQAvZpXoAXN5Mm6ms',
            balance: 1.5e-8,
          },
          // Add more mock fungible tokens as needed
        ],
        nonFungibleTokens: [
          {
            id: '00000000-0000-0000-0000-000000000003',
            name: 'USDC',
            symbol: 'USDC',
            amount: 1.143499738,
            valueUSD: 1.143499738,
            tokenAddress: 'EUfByYntmPrr41RNREAA3eNJtibLWmXtznb1vAsPjURq',
            balance: 1e-9,
          },
          {
            id: '00000000-0000-0000-0000-000000000004',
            name: 'USDC',
            symbol: 'USDC',
            amount: 1.143499738,
            valueUSD: 1.143499738,
            tokenAddress: '2RsC8ScNsdWuKBdTu4bqZzo1gdwtBcXeumBtLpiTRTBW',
            balance: 1e-9,
          },
          // Add more mock non-fungible tokens as needed
        ],
      });
    }, 500);
  });
};

export const fetchTransactions = async (page: number, pageSize: number): Promise<Transaction[]> => {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          type: 'Sent',
          amount: 0.5,
          token: '3VkR66qkbAQXwguaKYXHDRPtHuxyU1cXkkkDcJSzhkr8',
          date: '2023-10-01T12:34:56Z',
          to: 'Gbfudd5GxrcHXJK1Ab96ZsGLwXEt6etjqQmozmu1C91Y',
        },
        {
          id: '2',
          type: 'Received',
          amount: 1.0,
          token: '5mWu7wP3fcSshfRHtXJxoBLGPXzkQAvZpXoAXN5Mm6ms',
          date: '2023-10-02T14:20:00Z',
          from: 'Gbfudd5GxrcHXJK1Ab96ZsGLwXEt6etjqQmozmu1C91Y',
        },
        // Add more mock transactions as needed
      ]);
    }, 500);
  });
};