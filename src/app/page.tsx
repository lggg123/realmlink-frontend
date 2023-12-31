'use client'

import Image from 'next/image'
import React, { useState } from 'react';
import WalletConnection from './components/buttons/WalletConnection'
import Hero from './components/layout/Hero'
import WhitepaperButton from './components/buttons/WhitepaperButton'
import Register from './components/buttons/Register'
import CoreValues from './components/layout/CoreValues';
import Founders from './components/layout/Founders';
import Advisors from './components/layout/Advisors';
import EmployedTeam from './components/layout/EmployedTeam';
import { advisorsData } from './components/data/advisorsData';
import { employedTeamData } from './components/data/EmployedTeamData';

export default function Home() {
  const foundersData = [
    { name: 'Jonathan Else', photo: '/Jonny.jpg', title: 'Co-Founder', description: 'With a track history in leadership & innovation, Jonathan has made himself into an industry leader in blockchain technology. Jonathan now leverages his expertise to bring new ideas to the creative & fintech industries. As an industry leader, he’s dedicated to driving growth & fostering innovation in a sector that is ripe for disruption.'},
    { name: 'Ibrahim Aziz', photo: '/ibrahim.png', title: 'Co-Founder', description: 'Ibrahim, an experienced blockchain developer in EVM chains, excels in NFTs, gaming, DeFi, and ReFi projects. Active in the Kenyan Web3 space, he mentors developers and simplifies smart contract concepts. As founder of the Aquapurge Project, he merges blockchain with environmental advocacy, encouraging pollution reporting and cleanup. A dedicated public speaker, he frequently participates in Kenyan web3 events. His contributions reflect a commitment to advancing blockchain technology and its societal impact.'}
  ]
  const [walletAddress, setWalletAddress] = useState<string>("");

  const handleConnectWallet = (address: string) => {
    // Your logic for handling the wallet connection in the Home component
    setWalletAddress(address);
  };

  return (
    <main className="bg-zinc-900 min-h-screen flex flex-col items-center justify-center">
      <div className="mb-8">
        <div className="">
          <WalletConnection onConnectWallet={handleConnectWallet} />
        </div>
      </div>
      <Hero />
      <div className="flex flex-col items-center mt-8">
        <CoreValues />
        <div className="mt-8">
          <Founders founders={foundersData} />
        </div>
        <div className="mt-8">
          <Advisors advisors={advisorsData} />
        </div>
        <div className="mt-8">
          <EmployedTeam employedTeam={employedTeamData} />
        </div>
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
