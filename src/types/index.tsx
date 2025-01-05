export interface AccountInfo {
  address: string;
  totalAssets: number;
  fungibleTokens: FTToken[];
  nonFungibleTokens: NFTToken[];
}

export interface FTToken {
  id: string;
  name: string;
  symbol: string;
  amount: number;
  valueUSD: number;
  tokenAddress: string;
  balance: number;
}

export interface NFTToken {
  id: string;
  name: string;
  symbol: string;
  amount: number;
  valueUSD: number;
  tokenAddress: string;
  balance: number;
}

export interface Transaction {
  id: string;
  type: 'Sent' | 'Received';
  amount: number;
  token: string;
  date: string;
  from?: string;
  to?: string;
}