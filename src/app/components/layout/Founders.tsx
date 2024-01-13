import React from 'react'
import Image from 'next/image'

interface Founder {
  name: string
  photo: string
  title: string
  description: string
}

interface FoundersProps {
  founders: Founder[]
}

const Founders: React.FC<FoundersProps> = ({ founders }) => {
  return (
    <div className='text-center'>
      <h1 className='text-4xl text-primary-white font-bold mb-8'>
        Meet the Founders
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {founders.map((founder, index) => (
          <div
            key={index}
            className='flex flex-col items-center mb-4 p-4 border-2 border-brand-green-dark rounded-lg'
          >
            <div className='rounded-full border-2 border-brand-green-dark overflow-hidden mb-4'>
              <Image
                src={founder.photo}
                alt={founder.name}
                width={200}
                height={200}
                className='rounded-full'
              />
            </div>
            <div className='text-sm mt-2'>
              <h4 className='text-xl text-primary-white font-bold'>
                {founder.name}
              </h4>
              <p className='text-primary-white'>{founder.title}</p>
              <p className='text-primary-white'>{founder.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Founders
