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
import { advisorsData } from './components/data/advisorsData';
import BusinessD from './components/layout/BD';
import { bdData } from './components/data/bdData';
import CSuiteTeam from './components/layout/CSuite';
import Developers from './components/layout/Developers';
import { developersData } from './components/data/developersData';
import ManagementTeam from './components/layout/Management';
import { managementData } from './components/data/managementData';
import GrowthTeam from './components/layout/Growth';
import { growthData } from './components/data/growthData';
import { cSuiteData } from './components/data/cSuiteData';

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
          <h1 className="text-gray-300 text-4xl font-bold mb-8 text-center">Meet the Founders</h1>
          <Founders founders={foundersData} />
        </div>
        <div className="mt-8">
        <h1 className="text-gray-300 text-4xl font-bold mb-8">Meet the Advisors</h1>
          <Advisors advisors={advisorsData} />
        </div>
        <div className="mt-8">
        <h1 className="text-gray-300 text-4xl font-bold mb-8">Team To Be Hired - CSuite</h1>
          <CSuiteTeam csuite={cSuiteData} />
        </div>
        <div className="mt-8">
        <h1 className="text-gray-300 text-4xl font-bold mb-8">Team To Be Hired - Business Developers</h1>
          <BusinessD bdTeam={bdData} />
        </div>
        <div className="mt-8">
        <h1 className="text-gray-300 text-4xl font-bold mb-8">Team To Be Hired - Developers</h1>
          <Developers developers={developersData} />
        </div>
        <div className="mt-8">
        <h1 className="text-gray-300 text-4xl font-bold mb-8">Team To Be Hired - Managment/Relations</h1>
          <ManagementTeam management={managementData} />
        </div>
        <div className="mt-8">
        <h1 className="text-gray-300 text-4xl font-bold mb-8">Team To Be Hired - Community/Growth</h1>
          <GrowthTeam growthTeam={growthData} />
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
