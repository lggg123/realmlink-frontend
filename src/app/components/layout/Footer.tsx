import React from 'react'
import Link from 'next/link'
import {
  FaTwitter,
  FaDiscord,
  FaTelegramPlane,
  FaInstagram,
  FaHome // <-- Corrected import
} from 'react-icons/fa'
import Image from 'next/image'

const Footer: React.FC = () => {
  return (
    <footer className='brand-black text-primary-white  py-6'>
      <div className='container mx-auto text-center'>
        <p>© {new Date().getFullYear()} RealmLink. All rights reserved.</p>
        <p className='mt-2'>Follow us on social media:</p>
        <div className='flex justify-center mt-2 gap-4'>
          <Link href='https://twitter.com/RealmLink_Infra'>
            <FaTwitter size={24} />
          </Link>
          <Link href='https://discord.gg/W3K47RnVAx'>
            <FaDiscord size={24} />
          </Link>
          <Link href='https://t.me/+BZqWjNfu9Bk2ZjZk'>
            <FaTelegramPlane size={24} />
          </Link>
          <Link href='https://www.instagram.com/realmlink_infra/'>
            <FaInstagram size={24} />
          </Link>
          <Link href='https://www.threads.net/@realmlink_infra'>
            <Image
              src='/threads.svg'
              height={24}
              width={24}
              alt={'Threads icon'}
            />{' '}
            {/* Corrected icon usage */}
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
