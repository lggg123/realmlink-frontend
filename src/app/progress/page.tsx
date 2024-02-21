'use client'

import React from 'react';
import Image from 'next/image';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Progress () {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
                <main className='flex-grow brand-black text-primary-white  flex flex-col items-center justify-start pt-4'>
                    <div className='flex justify-center items-center flex-wrap flex-col'>
                        <h1 className="text-2xl font-bold mb-3">Stage 1</h1>
                        <p className='text-lg mb-4 pt-4 text-center'>
                          Imported, rendered, & animated character to Unity from IPFS.  
                        </p>
                    </div>
                    <div className="w-full max-w-4xl px-4 py-8">
                        <video
                            className="w-full h-auto rounded-md shadow-lg" // Tailwind CSS classes
                            controls
                            src="/unity test.webm" // Path to your video file
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </main>
            <Footer />
        </div>
    )
}
