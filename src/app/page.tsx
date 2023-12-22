'use client'

import Image from 'next/image'
import React, { useState } from 'react';
import WalletConnection from './components/buttons/WalletConnection'
import Hero from './components/layout/Hero'
import WhitepaperButton from './components/buttons/WhitepaperButton'
import Register from './components/buttons/Register'

export default function Home() {
  const [walletAddress, setWalletAddress] = useState<string>("");

  const handleConnectWallet = (address: string) => {
    // Your logic for handling the wallet connection in the Home component
    setWalletAddress(address);
  };

  return (
    <main className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <div className="mb-8">
        <div className="">
          <WalletConnection onConnectWallet={handleConnectWallet} />
        </div>
      </div>
      <Hero />
      
      <div className="flex flex-col items-center">
        <div className="mt-8">
          <Register walletAddress={walletAddress} />
        </div>
        <div className="mt-8">
          <WhitepaperButton />
        </div>
      </div>
    </main>
  )
}
