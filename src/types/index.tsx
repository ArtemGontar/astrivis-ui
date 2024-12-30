export interface AccountInfo {
  address: string;
  totalAssets: number;
}

export interface FTToken {
  id: string;
  name: string;
  symbol: string;
  amount: number;
  valueUSD: number;
}

export interface NFTToken {
  id: string;
  name: string;
  imageUrl: string;
  owner: string;
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
