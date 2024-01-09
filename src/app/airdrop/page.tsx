'use client' // Mark this file as a Client Component

import React, { useState } from 'react'
import WalletConnection from '../components/buttons/WalletConnection'
import Register from '../components/buttons/Register'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export default function Airdrop () {
  const [walletAddress, setWalletAddress] = useState<string>('')

  const handleConnectWallet = (address: string) => {
    setWalletAddress(address)
  }

  return (
    <div className='flex flex-col min-h-screen'>
      {' '}
      {/* Ensure the full screen height and flex column */}
      <Header />
      <main className='flex-grow bg-zinc-900 flex flex-col items-center justify-start pt-4'>
        {' '}
        {/* flex-grow will take up any available space */}{' '}
        {/* Reduced padding-top here */}
        <div className='flex flex-col items-center mt-8'>
          <WalletConnection onConnectWallet={handleConnectWallet} />
          <div> </div>
          <Register walletAddress={walletAddress} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
