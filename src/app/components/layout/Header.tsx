import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Dropdown from './Dropdown'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activePath, setActivePath] = useState('')
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const { pathname } = window.location
    setActivePath(pathname)
    return () => setIsMounted(false)
  }, [])
  // Define the navigation items with titles and paths
  const navItems = [
    { title: 'About Us', path: '/about' },
    { title: 'Team', path: '/team' },
    { title: 'Airdrop', path: '/airdrop' },
    { title: 'Progress', path: '/progress'},
    { title: 'Whitepaper', path: 'https://jonathanelse.gitbook.io/realmlink/' }
  ]

  const membershipOptions = [
    { title: 'Premium', path: '/membership' },
    { title: 'GM', path: '/gmmembership' }
  ];

  // Function to check if the link is active
  const isActive = (path: string) => {
    // Check if the current router path is equal to the path
    return activePath === path
  }

  return (
    <header className='relative brand-black text-white py-4 pb-0 border-b-4 border-brand-green-dark'>
      <nav className='container mx-auto flex justify-between items-center'>
        <Link href='/' className='flex items-center'>
          <Image src='/RealmLink-Logo.png' alt='Logo' width={150} height={75} />
        </Link>
        <div className='md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {/* Hamburger Icon SVG */}
          Menu
          <svg
            className='w-8 h-8'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            ></path>
          </svg>
        </div>
        <div
          className={`absolute top-full left-0 right-0 md:top-auto md:static md:flex flex-col md:flex-row items-center bg-zinc-900 md:bg-transparent z-20 ${
            isMenuOpen ? 'flex' : 'hidden'
          }`}
        >
          {navItems.map(item => (
            <Link
              key={item.title}
              href={item.path}
              passHref
              className={`rounded-lg border-2 border-brand-green-dark py-2 px-4 text-lg mx-2
                  ${
                    isActive(item.path)
                      ? 'bg-brand-green-light text-black'
                      : 'text-brand-green-light'
                  }
                  transition duration-300 ease-in-out
                  hover:bg-brand-green-light hover:text-black`}
              target={item.title === 'Whitepaper' ? '_blank' : '_self'}
              rel={
                item.title === 'Whitepaper' ? 'noopener noreferrer' : undefined
              }
            >
              {item.title}
            </Link>
          ))}
          <Dropdown
            options={membershipOptions}
            value={membershipOptions[0]} // Initial selected option
            onChange={(option) => console.log('Selected:', option)}
            isActive={(path) => isActive(path)}
          />
        </div>
      </nav>
    </header>
  )
}

export default Header
