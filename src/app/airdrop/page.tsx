'use client' // Mark this file as a Client Component

import React, { useState } from 'react'
import WalletConnection from '../components/buttons/WalletConnection'
import WhitepaperButton from '../components/buttons/WhitepaperButton'
import Register from '../components/buttons/Register'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export default function Airdrop () {
  const [walletAddress, setWalletAddress] = useState<string>('')

  const handleConnectWallet = (address: string) => {
    setWalletAddress(address)
  }

  return (
    <>
      <Header />
      <main className='bg-zinc-900 min-h-screen flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center mt-8'>
          <WalletConnection onConnectWallet={handleConnectWallet} />
          <div> </div>
          <Register walletAddress={walletAddress} />
          {/* <WhitepaperButton /> */}
        </div>
      </main>
      <Footer />
    </>
  )
}
