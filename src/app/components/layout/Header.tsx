'use client'
// components/Header.tsx
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='bg-zinc-900 text-white py-4'>
      <nav className='container mx-auto flex justify-between items-center'>
        <Link href='/' className='flex items-center'>
          <Image
            src='/RealmLink-Logo.png' // Path to your logo image
            alt='Logo'
            width={100} // Width of your logo
            height={50} // Height of your logo
          />
        </Link>
        <div className='md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {/* Hamburger Icon */}
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16m-7 6h7'
            ></path>
          </svg>
        </div>
        <div
          className={`flex-col md:flex-row md:flex gap-4 ${
            isMenuOpen ? 'flex' : 'hidden'
          }`}
        >
          <Link href='/about'>About Us</Link>
          <Link href='/team'>Team</Link>
          <Link href='/airdrop'>Airdrop</Link>
          <Link href='/membership'>Membership</Link>
          <Link href='https://jonathanelse.gitbook.io/realmlink/'>
            Whitepaper
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
