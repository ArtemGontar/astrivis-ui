import React from 'react';

interface AccountInfoProps {
  address: string;
  totalAssets: string;
}

const AccountInfo: React.FC<AccountInfoProps> = ({ address, totalAssets }) => {
  return (
    <div className="account-info">
      <h2>Account: {address}</h2>
      <p>Total Assets: {totalAssets}</p>
    </div>
  );
};

export default AccountInfo;