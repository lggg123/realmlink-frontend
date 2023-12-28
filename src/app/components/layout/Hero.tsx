// components/Hero.tsx
import React, { useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';

const Hero: React.FC = () => {
    const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1000 },
    });

    useEffect(() => {
        // Any additional logic you want to execute when the component mounts
        console.log('Hero component mounted');
        // You can also trigger additional actions here
    }, []); // Empty dependency array ensures the effect runs only once


    return (
        <section className={`bg-zinc-900 text-white py-16 text-center rounded-md`}>
            {/* <animated.div style={fadeIn} className={`max-w-2xl mx-auto`}> */}
                <h1 className={`text-4xl font-bold mb-4`}>Welcome to RealmLink</h1>
                <p className={`mb-2`}>Where your virtual adventures transcend boundaries!</p>
                <p className={`mb-2`}>With RealmLink, carry your characters, items, and pets across multiple gaming realms.</p>
                <p className={`mb-6`}>Unleash the power of web3 technology and weave your digital legacy through interconnected games.</p>
                <button className={`bg-blue-800 text-white py-2 px-4 rounded-full text-lg cursor-pointer mt-6`}>Start Your Journey</button>
    {/* </animated.div> */}
        </section>
    )
}

export default Hero;
