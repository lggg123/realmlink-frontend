// UpdateAddress.tsx
import React, { useState } from 'react';
import WalletConnection from './WalletConnection';
import Register from './Register';

const UpdateAddress: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string>("");

  const handleConnectWallet = (address: string) => {
    setWalletAddress(address);
  };

  return (
    <div>
      <WalletConnection onConnectWallet={handleConnectWallet} />
      <Register walletAddress={walletAddress} />
    </div>
  );
};

export default UpdateAddress;
