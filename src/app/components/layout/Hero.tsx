// components/Hero.tsx
import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className='bg-zinc-900 text-white text-center py-16 rounded-md'>
      <h1 className='text-4xl font-bold mb-4'>Welcome to RealmLink</h1>
      <p className='mb-2'>
        Where your virtual adventures transcend boundaries!
      </p>
      <p className='mb-2'>
        Carry your characters, items, and pets across multiple gaming realms.
      </p>
      <p className='mb-6'>
        Unleash the power of web3 technology in interconnected games.
      </p>
      <button className='bg-blue-800 text-white py-2 px-4 rounded-full text-lg cursor-pointer mt-6'>
        Start Your Journey
      </button>
    </section>
  )
}

export default Hero
