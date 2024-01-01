// components/layout/Founders.tsx
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
      <h1 className='text-4xl text-gray-300 font-bold mb-8'>
        Meet the Founders
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {founders.map((founder, index) => (
          <div key={index} className='flex flex-col items-center mb-4'>
            <Image
              src={founder.photo}
              alt={founder.name}
              width={200}
              height={200}
              className='rounded-full'
            />
            <div className='text-sm mt-2'>
              <h4 className='text-xl text-gray-500 font-bold'>
                {founder.name}
              </h4>
              <p className='text-gray-400'>{founder.title}</p>
              <p className='text-gray-400'>{founder.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Founders
