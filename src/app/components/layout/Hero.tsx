import React from 'react'
import Link from 'next/link'

const Hero: React.FC = () => {
  return (
    <section className='relative bg-hero-pattern bg-cover bg-center bg-no-repeat text-white text-center pt-28 pb-28 rounded-md shadow-xl backdrop-brightness-50 backdrop-filter backdrop-blur-sm'>
        <h1 className='text-5xl font-extrabold mb-6'>
          Begin an amazing gaming adventure.
        </h1>
        <p className='text-xl mb-4'>
          Dive into diverse worlds, from mystical lands to futuristic
          battlefields.
        </p>
        <p className='text-xl mb-4'>
          Carry your champions, pets and treasures across realms, breaking the
          barriers of traditional gaming.
        </p>
        <p className='text-xl mb-8'>
          Experience gaming revolutionized with web3 - more control, true
          ownership, and seamless experiences.
        </p>
        <Link
          className='inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full text-lg font-medium cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg'
          href='/airdrop'
        >
          Join the Revolution - Register for Airdrop
        </Link>
    </section>
  )
}

export default Hero
