import { AccountInfo, Transaction } from '../types';

const API_BASE_URL = 'https://localhost:7019/api/v1/Wallets';

export const fetchAccountInfo = async (walletAddress: string): Promise<AccountInfo> => {
  try {
    const response = await fetch(`${API_BASE_URL}/${walletAddress}`, {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching account info: ${response.statusText}`);
    }

    const data = await response.json();

    return {
      address: data.walletAddress,
      totalAssets: data.balance,
      fungibleTokens: data.fungibleTokens.map((token: any) => ({
        id: token.id,
        tokenAddress: token.tokenAddress,
        balance: token.balance,
      })),
      nonFungibleTokens: data.nonFungibleTokens.map((token: any) => ({
        id: token.id,
        tokenAddress: token.tokenAddress,
        balance: token.balance,
      })),
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const fetchTransactions = async (walletAddress: string): Promise<Transaction[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/${walletAddress}/transactions`, {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching transactions: ${response.statusText}`);
    }

    const data = await response.json();

    return data.map((transaction: any) => ({
      id: transaction.id,
      type: transaction.type,
      amount: transaction.amount,
      token: transaction.token,
      date: transaction.date,
      from: transaction.from,
      to: transaction.to,
    }));
  } catch (error) {
    console.error(error);
    throw error;
  }
};