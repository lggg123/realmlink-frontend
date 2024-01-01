// components/layout/CoreValues.tsx
import React from 'react'
import Image from 'next/image'

const CoreValues: React.FC = () => {
  return (
    <section className='flex flex-wrap justify-center text-center text-white'>
      <div className='m-8'>
        <h1 className='text-4xl font-bold mb-4'>Freedom</h1>
        <Image src='/freedom.png' alt='Freedom' width={250} height={250} />
      </div>
      <div className='m-8'>
        <h1 className='text-4xl font-bold mb-4'>Community</h1>
        <Image src='/community.png' alt='Community' width={250} height={250} />
      </div>
      <div className='m-8'>
        <h1 className='text-4xl font-bold mb-4'>Innovation</h1>
        <Image
          src='/Innovation.png'
          alt='Innovation'
          width={250}
          height={250}
        />
      </div>
      <div className='m-8'>
        <h1 className='text-4xl font-bold mb-4'>Immersion</h1>
        <Image src='/Immersion.png' alt='Immersion' width={250} height={250} />
      </div>
    </section>
  )
}

export default CoreValues
