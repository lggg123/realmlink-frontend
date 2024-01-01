// components/Header.tsx
import React from 'react'

const Header: React.FC = () => {
  return (
    <header className='bg-zinc-900 text-white py-4'>
      <nav className='container mx-auto flex justify-between items-center'>
        <a href='#home' className='text-2xl font-bold'>
          RealmLink
        </a>
        <div className='flex gap-4'>
          <a href='#about'>About Us</a>
          <a href='#team'>Team</a>
          <a href='#contact'>Contact</a>
        </div>
      </nav>
    </header>
  )
}

export default Header
