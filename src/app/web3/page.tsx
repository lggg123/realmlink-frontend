'use client' // Mark this file as a Client Component

import React, { useState } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import YouTube from 'react-youtube'

const videoIds = ['vuON3keu2C0', 'MxlVaZdIKbs', 'kIxkErwPpo8', 'TNZngOM9jk4'] // YouTube video IDs

export default function Team () {
  const [currentVideo, setCurrentVideo] = useState(0)

  const handleArrowClick = (direction: string) => {
    if (direction === 'left') {
      setCurrentVideo(currentVideo > 0 ? currentVideo - 1 : videoIds.length - 1)
    } else {
      setCurrentVideo(currentVideo < videoIds.length - 1 ? currentVideo + 1 : 0)
    }
  }

  return (
    <>
      <Header />
      <main className='brand-black text-primary-white min-h-screen flex flex-col items-center justify-center'>
        <section className='bg-gray-100 p-6'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>
              Why We Are Using Web3
            </h2>
            <p className='mb-2'>Enhanced Ownership and Control:</p>
            <ul className='list-disc list-inside mb-4'>
              <li>
                In web2, your in-game assets are controlled by game developers.
                In web3, thanks to blockchain technology, you truly own your
                assets like skins, characters, and items, much like owning a
                physical item in the real world.
              </li>
              <li>
                Interoperability Across Games: Imagine using your favorite
                character or item across different games. Web3's interconnected
                environment makes this possible, unlike the isolated ecosystems
                in web2.
              </li>
              <li>
                Community Participation: Web3 gaming platforms often allow
                players to participate in decision-making processes, something
                not typically seen in traditional web2 gaming.
              </li>
              <li>
                Secure and Transparent Transactions: Blockchain's transparent
                and secure nature ensures that your transactions and ownership
                records are tamper-proof, unlike the opaque systems in web2.
              </li>
            </ul>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>
              How to Use Web3
            </h2>
            <p className='mb-2'>Setting Up a Digital Wallet:</p>
            <ul className='list-disc list-inside mb-4'>
              <li>
                To interact with web3 platforms, you need a digital wallet.
                MetaMask is a popular choice for many gamers.
              </li>
              <li>
                Installing MetaMask: For PC: Visit MetaMask Download and choose
                the right extension for your browser. For iOS and Android:
                Download the MetaMask app from the App Store or Google Play
                Store.
              </li>
              <li>
                Creating Your Wallet: Follow the setup instructions to create
                your wallet. Remember to keep your recovery phrase safe!
              </li>
              <li>
                Using MetaMask on Mobile: To interact with web3 sites on mobile,
                you need to use the browser available within the MetaMask app.
                This ensures secure and seamless integration with web3
                platforms.
              </li>
              <li>
                Acquiring Cryptocurrency: You can buy cryptocurrency directly
                through MetaMask or transfer it from another source to start
                participating in web3 gaming.
              </li>
              <li>
                Exploring Web3 Games: With your wallet set up, you're ready to
                explore and participate in various web3 games and platforms.
              </li>
            </ul>

            <h2 className='text-2xl font-bold text-gray-800 mb-4'>
              Helpful Resources
            </h2>
            <p className='mb-2'>MetaMask Installation Guide:</p>
            <ul className='list-disc list-inside mb-4'>
              <li>
                Check out these beginner-friendly videos for a step-by-step
                guide on installing and using MetaMask:
              </li>
              <li>
                MetaMask Made Easy: ABeginner's Guide -{' '}
                <a
                  href='https://www.youtube.com/watch?v=vuON3keu2C0'
                  target='_blank'
                  className='text-blue-500 hover:text-blue-700'
                >
                  https://www.youtube.com/watch?v=vuON3keu2C0
                </a>
              </li>
              <li>
                Step-by-Step MetaMask Wallet Installation -{' '}
                <a
                  href='https://www.youtube.com/watch?v=MxlVaZdIKbs'
                  target='_blank'
                  className='text-blue-500 hover:text-blue-700'
                >
                  https://www.youtube.com/watch?v=MxlVaZdIKbs
                </a>
              </li>
              <li>
                How to Install MetaMask -{' '}
                <a
                  href='https://www.youtube.com/watch?v=kIxkErwPpo8'
                  target='_blank'
                  className='text-blue-500 hover:text-blue-700'
                >
                  https://www.youtube.com/watch?v=kIxkErwPpo8
                </a>
              </li>
              <li>
                METAMASK - Beginners Tutorial 2024 -{' '}
                <a
                  href='https://www.youtube.com/watch?v=TNZngOM9jk4'
                  target='_blank'
                  className='text-blue-500 hover:text-blue-700'
                >
                  https://www.youtube.com/watch?v=TNZngOM9jk4
                </a>
              </li>
            </ul>
            <p className='mb-2'>Download Links for MetaMask:</p>
            <ul className='list-disc list-inside mb-4'>
              <li>For PC: MetaMask for Chrome, Firefox, Brave, Edge, Opera</li>
              <li>
                For iOS and Android: You can find MetaMask on the App Store for
                iOS and on the Google Play Store for Android. Just search for
                "MetaMask" and download the official app.
              </li>
            </ul>
            <p className='mb-2'>Reminder for Mobile Users:</p>
            <p>
              If you're using MetaMask on a mobile device, remember to access
              web3 sites through the MetaMask app's built-in browser for a
              smooth and secure experience.
            </p>
            <p>
              With these resources and instructions, you're now ready to step
              into the world of web3 gaming. Enjoy a new level of interaction
              and ownership in your gaming adventures!
            </p>
          </div>
        </section>

        <section>
          <h2>Helpful Resources</h2>
          <div className='video-container'>
            <button onClick={() => handleArrowClick('left')}>Left</button>
            <YouTube videoId={videoIds[currentVideo]} />
            <button onClick={() => handleArrowClick('right')}>Right</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
