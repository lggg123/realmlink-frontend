import React from 'react'
import Image from 'next/image'

const CoreValues: React.FC = () => {
  return (
    <section className='core-values-container brand-black py-8 rounded-lg shadow-xl'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/* Core Value: Freedom */}
        <div className='core-value bg-secondary-navy-blue border-2 border-brand-green-dark p-6 rounded-md shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105'>
          <h1 className='value-title text-3xl text-brand-green-light font-semibold mb-4'>
            Freedom
          </h1>
          <Image
            src='/freedom.png'
            alt='Freedom'
            width={250}
            height={250}
            className='mx-auto'
          />
          <p className='value-description text-primary-white mt-4'>
            Embrace the liberty to seamlessly transition your digital assets
            across various gaming realms. Our protocol empowers you, the
            community, with unparalleled autonomy to shape the ecosystem and
            govern its evolution. Experience true digital freedom, unbound by
            traditional constraints.
          </p>
        </div>

        {/* Core Value: Community */}
        <div className='core-value bg-secondary-navy-blue border-2 border-brand-green-dark p-6 rounded-md shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105'>
          <h1 className='value-title text-3xl text-brand-green-light font-semibold mb-4'>
            Community
          </h1>
          <Image
            src='/community.png'
            alt='Community'
            width={250}
            height={250}
            className='mx-auto'
          />
          <p className='value-description text-primary-white mt-4'>
            Dive into a collaborative universe where your creativity shapes the
            world. In our community-driven landscape, you have the power to
            design and breathe life into unique characters, innovative items,
            and enchanting pets. Each creation becomes a shared journey across
            diverse realms, fueled by collective imagination.
          </p>
        </div>

        {/* Core Value: Innovation */}
        <div className='core-value bg-secondary-navy-blue border-2 border-brand-green-dark p-6 rounded-md shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105'>
          <h1 className='value-title text-3xl text-brand-green-light font-semibold mb-4'>
            Innovation
          </h1>
          <Image
            src='/Innovation.png'
            alt='Innovation'
            width={250}
            height={250}
            className='mx-auto'
          />
          <p className='value-description text-primary-white mt-4'>
            Innovation is the cornerstone of our journey. We&apos;re committed
            to fostering a culture where creative ideas flourish, and boundaries
            are redefined. Our platform is a catalyst for groundbreaking
            experiences, unlocking new possibilities in gaming and beyond. Join
            us in paving the path towards a future brimming with innovation.
          </p>
        </div>

        {/* Core Value: Immersion */}
        <div className='core-value bg-secondary-navy-blue border-2 border-brand-green-dark p-6 rounded-md shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105'>
          <h1 className='value-title text-3xl text-brand-green-light font-semibold mb-4'>
            Immersion
          </h1>
          <Image
            src='/Immersion.png'
            alt='Immersion'
            width={250}
            height={250}
            className='mx-auto'
          />
          <p className='value-description text-primary-white mt-4'>
            Step into a world where immersion transcends expectation. At
            RealmLink, our vision is to craft experiences that captivate your
            senses, free from disruptive barriers like paywalls. We prioritize
            your adventure, ensuring each moment in-game is authentic,
            uninterrupted, and profoundly engaging.
          </p>
        </div>
        <div className='col-span-full text-center mt-8 border-2 border-brand-green-dark p-6 rounded-md'>
          <p className='text-primary-white'>
            Experience immersive gameplay like never before. We create worlds
            where every detail is crafted for depth and realism, so you can lose
            yourself in the game. Our commitment to immersive design ensures
            that you&apos;re not just playing a game—you&apos;re living it.
          </p>
        </div>
      </div>
    </section>
  )
}
export default CoreValues
