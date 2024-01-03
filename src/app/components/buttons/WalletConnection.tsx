// components/WalletConnection.tsx

import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import Image from 'next/image'

interface WindowWithEthereum extends Window {
  ethereum?: any
}

interface WalletConnectionProps {
  onConnectWallet: (address: string) => void
}

const WalletConnection: React.FC<WalletConnectionProps> = ({
  onConnectWallet
}) => {
  // State variables for wallet connection status and address
  const [connected, setConnected] = useState<boolean>(false)
  const [walletAddress, setWalletAddress] = useState<string>('')

  // Function to connect/disconnect the wallet
  const connectWallet = async () => {
    const { ethereum } = window as WindowWithEthereum

    if (!ethereum) {
      alert(
        'Install metamask & if on mobile view this page through the metamask mobile app browser'
      )
    }

    if (!connected && ethereum) {
      // Connect the wallet using ethers.js
      try {
        const provider = new ethers.BrowserProvider(ethereum)
        const signer = await provider.getSigner()
        const _walletAddress = await signer.getAddress()
        setConnected(true)
        setWalletAddress(_walletAddress)
        onConnectWallet(_walletAddress)
      } catch (error) {
        console.error('Error connecting wallet:', error)
      }
    } else {
      // Disconnect the wallet
      if (ethereum) {
        ethereum.selectedAddress = null
      }
      setConnected(false)
      setWalletAddress('')
    }
  }

  return (
    <div className='walletConnection'>
      <button
        className={`btn ${
          connected ? 'btn-disconnect' : 'btn-connect'
        } rounded-full`}
        onClick={connectWallet}
      >
        <Image
          src='/metamask.png'
          alt='Metamask Logo'
          width={16} // Added width
          height={16} // Added height
          className='mr-2 w-6 h-6'
        />
        {connected ? 'Disconnect Wallet' : 'Connect Wallet'}
      </button>
      {connected && (
        <div>
          <h3 className='text-gray-500'>Address</h3>
          <h4 className='wal-add text-gray-500'>{walletAddress}</h4>
        </div>
      )}
    </div>
  )
}

export default WalletConnection
