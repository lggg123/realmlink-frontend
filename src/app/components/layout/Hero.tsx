// components/Hero.tsx

import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className={`bg-gray-900 text-white py-16 text-center`}>
            <div className={`max-w-2xl mx-auto`}>
                <h1>Welcome to RealmLink</h1>
                <p className={`text-lg mb-2`}>Where your virtual adventures transcend boundaries!</p>
                <p className={`text-lg mb-2`}>With RealmLink, carry your characters, items, and pets across multiple gaming realms.</p>
                <p className={`text-lg mb-2`}>Unleash the power of web3 technology and weave your digital legacy through interconnected games.</p>
                <button className={`bg-blue-500 text-white py-2 px-4 rounded-full text-lg cursor-pointer`}>Start Your Journey</button>
            </div>
        </section>
    )
}

export default HeroSection;