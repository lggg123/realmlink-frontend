// components/layout/CoreValues.tsx
import React from 'react'
import Image from 'next/image'

const CoreValues: React.FC = () => {
  return (
    <section className='core-values-container'>
      <div className='core-value'>
        <h1 className='value-title text-gray-300'>Freedom</h1>
        <Image src='/freedom.png' alt='Freedom' width={250} height={250} />
        <p className='value-description text-gray-400'>
          Embrace the liberty to seamlessly transition your digital assets
          across various gaming realms. Our protocol empowers you, the
          community, with unparalleled autonomy to shape the ecosystem and
          govern its evolution. Experience true digital freedom, unbound by
          traditional constraints.
        </p>
      </div>

      <div className='core-value'>
        <h1 className='value-title text-gray-300'>Community</h1>
        <Image src='/community.png' alt='Community' width={250} height={250} />
        <p className='value-description text-gray-400'>
          Dive into a collaborative universe where your creativity shapes the
          world. In our community-driven landscape, you have the power to design
          and breathe life into unique characters, innovative items, and
          enchanting pets. Each creation becomes a shared journey across diverse
          realms, fueled by collective imagination.
        </p>
      </div>

      <div className='core-value'>
        <h1 className='value-title text-gray-300'>Innovation</h1>
        <Image
          src='/Innovation.png'
          alt='Innovation'
          width={250}
          height={250}
        />
        <p className='value-description text-gray-400'>
          Innovation is the cornerstone of our journey. We&apos;re committed to
          fostering a culture where creative ideas flourish, and boundaries are
          redefined. Our platform is a catalyst for groundbreaking experiences,
          unlocking new possibilities in gaming and beyond. Join us in paving
          the path towards a future brimming with innovation.
        </p>
      </div>

      <div className='core-value'>
        <h1 className='value-title text-gray-300'>Immersion</h1>
        <Image src='/Immersion.png' alt='Immersion' width={250} height={250} />
        <p className='value-description text-gray-400'>
          Step into a world where immersion transcends expectation. At
          RealmLink, our vision is to craft experiences that captivate your
          senses, free from disruptive barriers like paywalls. We prioritize
          your adventure, ensuring each moment in-game is authentic,
          uninterrupted, and profoundly engaging.
        </p>
      </div>
    </section>
  )
}

export default CoreValues
