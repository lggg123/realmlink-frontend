import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  return (
    <motion.section 
      className='relative bg-hero-pattern bg-cover bg-center bg-no-repeat text-center text-white pt-28 pb-28 px-56 rounded-md shadow-xl backdrop-brightness-50 backdrop-filter backdrop-blur-sm'
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0, y: -100 }}
    >
        <h1 className='text-5xl font-extrabold mb-6'>
          Bring Your Collectibles<br/> Across Realms
        </h1>
        <p className='text-xl mb-4'>
          Dive into diverse worlds, from mystical lands to futuristic
          battlefields.
        </p>
        <p className='text-xl mb-4'>
          Carry your champions, pets and treasures across realms,
          <br/>breaking the barriers of traditional gaming.
        </p>
        <Link
          className='inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 text-center align-center rounded-full text-lg font-medium cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg'
          href='/airdrop'
        >
          Join the Revolution - Register for Airdrop
        </Link>
    </motion.section>
  )
}

export default Hero
