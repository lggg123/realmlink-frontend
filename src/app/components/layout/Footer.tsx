// components/Footer.tsx
import React from 'react'
import Link from 'next/link'
const Footer: React.FC = () => {
  return (
    <footer className='bg-zinc-900 text-white py-6'>
      <div className='container mx-auto text-center'>
        <p>© {new Date().getFullYear()} RealmLink. All rights reserved.</p>
        <p className='mt-2'>Follow us on social media:</p>
        <div className='flex justify-center mt-2 gap-4'>
          <Link
            href='https://twitter.com/RealmLink_Infra'
            target='_blank'
            rel='noopener noreferrer'
          >
            Twitter
          </Link>
          <Link
            href='https://discord.gg/W3K47RnVAx'
            target='_blank'
            rel='noopener noreferrer'
          >
            Discord
          </Link>
          <Link
            href='https://t.me/+BZqWjNfu9Bk2ZjZk'
            target='_blank'
            rel='noopener noreferrer'
          >
            Telegram
          </Link>
          <Link
            href='https://www.instagram.com/realmlink_infra/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Instagram
          </Link>
          <Link
            href='https://www.threads.net/@realmlink_infra'
            target='_blank'
            rel='noopener noreferrer'
          >
            Threads
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
