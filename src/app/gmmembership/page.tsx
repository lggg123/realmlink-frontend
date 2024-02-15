'use client'

import React from 'react';
import Image from 'next/image';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function GmMembership () {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
                <main className='flex-grow brand-black text-primary-white  flex flex-col items-center justify-start pt-4'>
                    <div className='flex justify-center items-center flex-wrap'>
                        <Image
                        src='/gm-membership.png'
                        alt='GM Membership'
                        className='rounded-lg shadow-lg'
                        height={450}
                        width={900}
                        />
                        <p className='text-lg mb-4'>
                            Post `"GM @realmlink_infra #Web3Gaming"` once a day for 30 days and you will get a tier 1 GM membership,<br /> which includes loyaly airdrops & benefits for being a community supporter.
                        </p>
                    </div>
                </main>
            <Footer />
        </div>
    )
}
