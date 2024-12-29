import React from 'react';

interface NFTToken {
  name: string;
  value: string;
}

interface NFTTableProps {
  tokens: NFTToken[];
}

const NFTTable: React.FC<NFTTableProps> = ({ tokens }) => {
  return (
    <div className="table">
      <h3>NFT Token Holdings</h3>
      <table>
        <thead>
          <tr>
            <th>NFT</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((nft, index) => (
            <tr key={index}>
              <td>{nft.name}</td>
              <td>{nft.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NFTTable;