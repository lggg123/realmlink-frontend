import React from 'react'
import Link from 'next/link'

const Hero: React.FC = () => {
  return (
    <section className='relative bg-hero-pattern bg-cover bg-center bg-no-repeat text-white text-center py-24 rounded-md shadow-xl'>
      <div className='backdrop-brightness-50 backdrop-filter backdrop-blur-sm rounded-md'>
        <h1 className='text-5xl font-extrabold mb-6'>
          Welcome to the Adventure
        </h1>
        <p className='text-xl mb-4'>
          Where your virtual adventures transcend boundaries.
        </p>
        <p className='text-xl mb-4'>
          Carry your characters, items, and pets across multiple gaming realms.
        </p>
        <p className='text-xl mb-8'>
          Unleash the power of web3 technology in interconnected games.
        </p>
        <Link
          className='inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full text-lg font-medium cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg'
          href='/airdrop'
        >
          Register For Airdrop
        </Link>
      </div>
    </section>
  )
}

export default Hero
