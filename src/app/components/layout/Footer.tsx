// components/Footer.tsx
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className='bg-zinc-900 text-white py-6'>
      <div className='container mx-auto text-center'>
        <p>© {new Date().getFullYear()} RealmLink. All rights reserved.</p>
        <p className='mt-2'>Follow us on social media:</p>
        <div className='flex justify-center mt-2 gap-4'>
          <a
            href='https://twitter.com/yourhandle'
            target='_blank'
            rel='noopener noreferrer'
          >
            Twitter
          </a>
          <a
            href='https://facebook.com/yourpage'
            target='_blank'
            rel='noopener noreferrer'
          >
            Facebook
          </a>
          <a
            href='https://instagram.com/yourhandle'
            target='_blank'
            rel='noopener noreferrer'
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
