'use client'
// pages/membership/page.tsx
import React, { useState, useEffect } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import WalletConnection from '../components/buttons/WalletConnection' // Assuming you have this component from before
import { ethers } from 'ethers'
import Image from 'next/image'

const USDC_CONTRACT_ADDRESS = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
const NFT_CONTRACT_ADDRESS = '0xABEa909D13681FdA347a02A2A9413463F21D0441'
const USDC_CONTRACT_ABI = [
  // balanceOf
  {
    constant: true,
    inputs: [{ name: '_owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', type: 'uint256' }],
    type: 'function'
  },
  // approve
  {
    constant: false,
    inputs: [
      { name: '_spender', type: 'address' },
      { name: '_value', type: 'uint256' }
    ],
    name: 'approve',
    outputs: [{ name: '', type: 'bool' }],
    type: 'function'
  }
]

const NFT_CONTRACT_ABI = [
  // mint6Month
  {
    constant: false,
    inputs: [],
    name: 'mint6Month',
    outputs: [],
    type: 'function'
  },
  // mint1Year
  {
    constant: false,
    inputs: [],
    name: 'mint1Year',
    outputs: [],
    type: 'function'
  }
]

const POLYGON_MAINNET_PARAMS = {
  chainId: '0x89', // Hexadecimal version of 137, the chainId for Polygon Mainnet
  chainName: 'Polygon Mainnet',
  nativeCurrency: {
    name: 'MATIC',
    symbol: 'MATIC', // 2-6 characters long
    decimals: 18
  },
  rpcUrls: ['https://polygon-rpc.com/'],
  blockExplorerUrls: ['https://polygonscan.com/']
}

interface WindowWithEthereum extends Window {
  ethereum?: any
}

export default function MembershipPage () {
  const [walletAddress, setWalletAddress] = useState('')
  const [maticBalance, setMaticBalance] = useState('')
  const [usdcBalance, setUsdcBalance] = useState('')
  const [isConnectedToPolygon, setIsConnectedToPolygon] = useState(false)

  // Function to handle wallet connection
  const handleConnectWallet = async (address: string) => {
    // Set wallet address
    setWalletAddress(address)

    if (address !== '') {
      // Check and switch to Polygon Mainnet
      await switchToPolygonNetwork()

      // Fetch balances
      fetchBalances(address)
    }
  }

  // Function to fetch MATIC and USDC balances
  async function fetchBalances (address: string) {
    const { ethereum } = window as WindowWithEthereum
    const provider = new ethers.BrowserProvider(ethereum)
    const maticBalance = await provider.getBalance(address)
    const usdcContract = new ethers.Contract(
      USDC_CONTRACT_ADDRESS,
      USDC_CONTRACT_ABI,
      provider
    )
    const usdcBalance = await usdcContract.balanceOf(address)

    setMaticBalance(ethers.formatEther(maticBalance))
    setUsdcBalance(ethers.formatUnits(usdcBalance, 6)) // Assuming USDC has 6 decimal places
  }

  // Function to switch to Polygon Mainnet
  // Function to switch to Polygon Mainnet
  async function switchToPolygonNetwork () {
    const { ethereum } = window as WindowWithEthereum
    if (!ethereum) {
      console.error('Ethereum object not found')
      return
    }

    try {
      // Check if already connected to Polygon Mainnet
      const currentChainId = await ethereum.request({ method: 'eth_chainId' })
      if (currentChainId === POLYGON_MAINNET_PARAMS.chainId) {
        setIsConnectedToPolygon(true)
        return
      }

      // Attempt to switch to Polygon Mainnet
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: POLYGON_MAINNET_PARAMS.chainId }]
      })

      setIsConnectedToPolygon(true)
    } catch (error) {
      const switchError = error as any // Type assertion to 'any'

      // Handle error, such as network not added to user's wallet
      if (switchError.code === 4902) {
        try {
          // Add Polygon Mainnet to user's wallet
          await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [POLYGON_MAINNET_PARAMS]
          })
          setIsConnectedToPolygon(true)
          const provider = new ethers.BrowserProvider(ethereum)
          const signer = await provider.getSigner()
          const _walletAddress = await signer.getAddress()
          await fetchBalances(_walletAddress)
        } catch (addError) {
          console.error('Error adding Polygon network:', addError)
        }
      } else {
        console.error('Error switching to Polygon:', switchError)
      }
      setIsConnectedToPolygon(false)
    }
  }

  // Function to handle NFT minting
  async function handleMint (duration: string) {
    const { ethereum } = window as WindowWithEthereum
    const provider = new ethers.BrowserProvider(ethereum)
    const signer = await provider.getSigner()
    const usdcContract = new ethers.Contract(
      USDC_CONTRACT_ADDRESS,
      USDC_CONTRACT_ABI,
      signer
    )
    const nftContract = new ethers.Contract(
      NFT_CONTRACT_ADDRESS,
      NFT_CONTRACT_ABI,
      signer
    )

    const amount = duration === '6months' ? '50' : '80'
    const usdcAmount = ethers.parseUnits(amount, 6) // Assuming USDC has 6 decimal places

    try {
      // Approve USDC spending
      const approveTx = await usdcContract.approve(
        NFT_CONTRACT_ADDRESS,
        usdcAmount
      )
      await approveTx.wait()

      // Mint the membership NFT
      const mintTx =
        duration === '6months'
          ? await nftContract.mint6Month()
          : await nftContract.mint1Year()
      await mintTx.wait()
      // Handle the successful minting (e.g., updating the state, notifying the user)
    } catch (error) {
      console.error('Error minting NFT:', error)
      // Handle errors, such as transaction failures or rejections
    }
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='brand-black text-primary-white flex flex-grow flex-col items-center justify-between text-white pt-20'>
        <div className='pt-6'>
          <WalletConnection onConnectWallet={handleConnectWallet} />
        </div>
        <section className='text-center my-10'>
          <h2 className='text-4xl font-bold mb-6'>
            Why Mint a Membership NFT?
          </h2>
          <p className='text-lg mb-4'>
            Become a pioneer in the new era of gaming. Our Membership NFTs offer
            exclusive access to:
          </p>

          <ul className='list-disc list-inside mb-6 text-left mx-auto max-w-2xl'>
            <li>
              Premium airdrops of assets, including characters, items, and pets.
            </li>
            <li>
              Special voting rights in our community-driven development process
              once deployed.
            </li>
            <li>Discounts and special offers within our gaming ecosystem.</li>
            <li>Early Access Alpha Realms</li>
          </ul>

          <div className='flex justify-center items-center flex-wrap gap-4'>
            <Image
              src='/membership-benefit-1.png'
              alt='Early Access'
              className='rounded-lg shadow-lg w-1/2 max-w-xs'
              width={400}
              height={400}
            />
            <Image
              src='/membership-benefit-2.png'
              alt='Premium Airdrops'
              className='rounded-lg shadow-lg w-1/2 max-w-xs'
              width={400}
              height={400}
            />
          </div>
        </section>

        <div className='balance-info my-4'>
          {walletAddress && (
            <>
              <p>MATIC Balance: {maticBalance}</p>
              <p>USDC Balance: {usdcBalance}</p>
            </>
          )}
        </div>
        {isConnectedToPolygon && walletAddress && (
          <div className='membership-options my-4'>
            <button
              onClick={() => handleMint('6months')}
              className='px-6 py-2 my-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75 shadow-lg'
            >
              Mint 6-Month Membership (50 USDC)
            </button>
            <button
              onClick={() => handleMint('12months')}
              className='px-6 py-2 my-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-75 shadow-lg'
            >
              Mint 12-Month Membership (80 USDC)
            </button>
          </div>
        )}
        {!isConnectedToPolygon && (
          <p>
            Please switch to the Polygon Mainnet to mint your membership NFT.
          </p>
        )}
        {/* <div>Coming Soon!</div> */}
      </main>
      <Footer />
    </div>
  )
}
