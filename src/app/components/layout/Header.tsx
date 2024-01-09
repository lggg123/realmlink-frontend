// components/Header.tsx
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Header: React.FC = () => {
  return (
    <header className='bg-zinc-900 text-white py-4'>
      <nav className='container mx-auto flex justify-between items-center'>
        <Link href='/' className='flex items-center'>
          {/* Replace the text with the Image component */}

          <Image
            src='/RealmLink-Logo.png' // The path to your logo image
            alt='Logo'
            width={100} // The width of your logo
            height={50} // The height of your logo
            className='text-2xl font-bold'
          />
        </Link>
        <div className='flex gap-4'>
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
