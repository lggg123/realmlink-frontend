'use client' // Mark this file as a Client Component

import React from 'react'
import Hero from '../components/layout/Hero'
import CoreValues from '../components/layout/CoreValues'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import JoinCommunitySection from '../components/layout/JoinCommunity'
import BenefitsForBuilders from '../components/layout/BenefitsForBuilders'
import BenefitsForGamers from '../components/layout/BenefitsForGamers'
import FeaturesSection from '../components/layout/FeaturesSection'
import Testimonials from '../components/layout/Testimonials' // New component for testimonials
import Roadmap from '../components/layout/Roadmap' // New component for roadmap

export default function Home () {
  return (
    <>
      <Header />
      <main className='bg-zinc-900 min-h-screen flex flex-col items-center justify-center'>
        <div id='about' className='flex flex-col items-center mt-8'>
          <CoreValues />
        </div>
        <Roadmap /> {/* New Roadmap section */}
        {/* <Testimonials /> New Testimonials section */}
      </main>
      <Footer />
    </>
  )
}
