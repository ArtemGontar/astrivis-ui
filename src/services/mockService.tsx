export const getAccountInfoMock = () => ({
  address: '0x123456789',
  totalAssets: '12000 USD'
});

export const getFTTokensMock = () => [
  { name: 'USDT', balance: '5000' },
  { name: 'SOL', balance: '3000' },
  { name: 'BTC', balance: '2000' }
];

export const getNFTTokensMock = () => [
  { name: 'CryptoPunk #123', value: '4000 USD' },
  { name: 'BoredApe #456', value: '6000 USD' }
];

export const getTransactionHistoryMock = (page: number) => {
  const transactions = [
    { date: '2024-12-01', description: 'Bought USDT', amount: '+5000 USD' },
    { date: '2024-12-02', description: 'Sold SOL', amount: '-1000 USD' },
    { date: '2024-12-03', description: 'Received BTC', amount: '+2000 USD' },
    { date: '2024-12-04', description: 'Sent ETH', amount: '-500 USD' }
  ];
  return transactions.slice((page - 1) * 2, page * 2);
};