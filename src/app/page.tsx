'use client' // Mark this file as a Client Component

import React, { useState } from 'react'
import Hero from './components/layout/Hero'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import JoinCommunitySection from './components/layout/JoinCommunity'
import BenefitsForBuilders from './components/layout/BenefitsForBuilders'
import BenefitsForGamers from './components/layout/BenefitsForGamers'
import FeaturesSection from './components/layout/FeaturesSection'
import { PrivacyPolicyPopup } from './components/layout/PolicyPopup'
import Partnership from './components/buttons/Partnership'
import GameUpdate from './components/buttons/GameUpdate'
import ArtistUpdate from './components/buttons/ArtistUpdate'

export default function Home () {
  return (
    <div className="main-container">
      <Header />
      <PrivacyPolicyPopup />
      <main className='brand-black min-h-screen flex flex-col items-center justify-center pt-20 pb-0'>
        <Hero />
        <div className='combined-sections'>
          <FeaturesSection />
          <BenefitsForGamers />
        </div>
        <div className='combined-sections2'>
          <BenefitsForBuilders />
          <JoinCommunitySection />
        </div>
        <div className="items-center mt-8 flex flex-col justify-center">
          <Partnership />
          <GameUpdate />
          <ArtistUpdate />
        </div>
      </main>
      <Footer />
    </div>
  )
}
