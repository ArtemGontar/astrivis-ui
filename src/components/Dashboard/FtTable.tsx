import React from 'react';

interface FTToken {
  name: string;
  balance: string;
}

interface FTTableProps {
  tokens: FTToken[];
}

const FTTable: React.FC<FTTableProps> = ({ tokens }) => {
  return (
    <div className="table">
      <h3>FT Token Holdings</h3>
      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token, index) => (
            <tr key={index}>
              <td>{token.name}</td>
              <td>{token.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FTTable;