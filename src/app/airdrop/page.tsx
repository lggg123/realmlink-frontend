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
      <main className='flex-grow brand-black text-primary-white  flex flex-col items-center justify-start pt-4'>
        {' '}
        {/* flex-grow will take up any available space */}{' '}
        {/* Reduced padding-top here */}
        <div className='flex flex-col items-center mt-8'>
          <WalletConnection onConnectWallet={handleConnectWallet} />
          <div> </div>
          <Register walletAddress={walletAddress} />
        </div>
      </main>
      <style jsx>{`
        @media screen and (max-width: 768px) {
          .flex-col.items-center {
            text-align: center; // Center-align text
          }

          .flex.flex-col.items-center.mt-8 {
            margin-top: 4rem; // Adjust margin for better spacing
          }
        }
      `}</style>
      <Footer />
    </div>
  )
}
