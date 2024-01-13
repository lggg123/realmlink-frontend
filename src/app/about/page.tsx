'use client' // Mark this file as a Client Component

import React from 'react'
import CoreValues from '../components/layout/CoreValues'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Roadmap from '../components/layout/Roadmap' // New component for roadmap

export default function Home () {
  return (
    <>
      <Header />
      <main className='brand-black text-primary-white  min-h-screen flex flex-col items-center justify-center'>
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
