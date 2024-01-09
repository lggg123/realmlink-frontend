// components/WalletConnection.tsx
import React, { useState } from 'react'
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
  const [connected, setConnected] = useState<boolean>(false)
  const [walletAddress, setWalletAddress] = useState<string>('')

  const connectWallet = async () => {
    const { ethereum } = window as WindowWithEthereum

    if (!ethereum) {
      alert(
        'Install Metamask & if on mobile, view this page through the Metamask mobile app browser'
      )
    }

    if (!connected && ethereum) {
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
        } py-2 px-4 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg`}
        onClick={connectWallet}
      >
        <Image
          src='/metamask.png'
          alt='Metamask Logo'
          width={24}
          height={24}
          className='mr-2'
        />
        {connected ? 'Disconnect Wallet' : 'Connect Wallet'}
      </button>
      {connected && (
        <div className='mt-4 p-3 bg-gray-800 text-white rounded-lg shadow-md'>
          <h3 className='text-gray-400 text-sm'>Connected Address:</h3>
          <h4 className='wal-add break-words'>{walletAddress}</h4>
        </div>
      )}
    </div>
  )
}

export default WalletConnection
