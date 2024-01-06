'use client' // Mark this file as a Client Component

import React, { useState } from 'react'
import WalletConnection from './components/buttons/WalletConnection'
import Hero from './components/layout/Hero'
import WhitepaperButton from './components/buttons/WhitepaperButton'
import Register from './components/buttons/Register'
import CoreValues from './components/layout/CoreValues'
import Founders from './components/layout/Founders'
import Advisors from './components/layout/Advisors'
import TeamSection from './components/layout/TeamSection'
import { advisorsData } from './components/data/advisorsData'
import { bdData } from './components/data/bdData'
import { cSuiteData } from './components/data/cSuiteData'
import { developersData } from './components/data/developersData'
import { managementData } from './components/data/managementData'
import { growthData } from './components/data/growthData'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import JoinCommunitySection from './components/layout/JoinCommunity'
import BenefitsForBuilders from './components/layout/BenefitsForBuilders'
import BenefitsForGamers from './components/layout/BenefitsForGamers'
import FeaturesSection from './components/layout/FeaturesSection'
import IntroductionSection from './components/layout/IntroductionSection'

export default function Home () {
  const foundersData = [
    {
      name: 'Jonathan Else',
      photo: '/Jonny.jpg',
      title: 'Co-Founder',
      description:
        'With a track history in leadership & innovation, Jonathan has made himself into an industry leader in blockchain technology. Jonathan now leverages his expertise to bring new ideas to the creative & fintech industries. As an industry leader, he’s dedicated to driving growth & fostering innovation in a sector that is ripe for disruption.'
    },
    {
      name: 'Ibrahim Aziz',
      photo: '/ibrahim.png',
      title: 'Co-Founder',
      description:
        'Ibrahim, an experienced blockchain developer in EVM chains, excels in NFTs, gaming, DeFi, and ReFi projects. Active in the Kenyan Web3 space, he mentors developers and simplifies smart contract concepts. As founder of the Aquapurge Project, he merges blockchain with environmental advocacy, encouraging pollution reporting and cleanup. A dedicated public speaker, he frequently participates in Kenyan web3 events. His contributions reflect a commitment to advancing blockchain technology and its societal impact.'
    }
  ]
  const [walletAddress, setWalletAddress] = useState<string>('')

  const handleConnectWallet = (address: string) => {
    setWalletAddress(address)
  }

  return (
    <>
      <Header />
      <main className='bg-zinc-900 min-h-screen flex flex-col items-center justify-center'>
        <Hero />
        {/* <IntroductionSection /> */}
        <div className='combined-sections'>
          <FeaturesSection />
          <BenefitsForGamers />
        </div>
        <div className='combined-sections'>
          <BenefitsForBuilders />
          <JoinCommunitySection />
        </div>
        <div id='about' className='flex flex-col items-center mt-8'>
          <CoreValues />
        </div>
        <div id='team' className='flex flex-col items-center mt-8'>
          <Founders founders={foundersData} />
          <TeamSection teamType='CSuite' teamMembers={cSuiteData} />
          <TeamSection teamType='Business Developers' teamMembers={bdData} />
          <TeamSection teamType='Developers' teamMembers={developersData} />
          <TeamSection
            teamType='Management/Relations'
            teamMembers={managementData}
          />
          <TeamSection teamType='Community/Growth' teamMembers={growthData} />
          <Advisors advisors={advisorsData} />
        </div>
        <div id='contact' className='flex flex-col items-center mt-8'>
          <WalletConnection onConnectWallet={handleConnectWallet} />
          <Register walletAddress={walletAddress} />
          <WhitepaperButton />
        </div>
      </main>
      <Footer />
    </>
  )
}
