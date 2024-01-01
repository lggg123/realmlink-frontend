// Advisors.tsx
import React from 'react'
import Image from 'next/image'

interface Advisor {
  name: string
  photo: string
  title: string
}

interface AdvisorsProps {
  advisors: Advisor[]
}

const Advisors: React.FC<AdvisorsProps> = ({ advisors }) => {
  return (
    <div className='advisors-grid'>
      {advisors.map((advisor, index) => (
        <div key={index} className='advisor-card'>
          <div className='image-container'>
            <Image
              src={advisor.photo}
              alt={advisor.name}
              layout='responsive' // Or "fill" depending on your use case
              width={150} // Use your specific size
              height={150} // Maintain the aspect ratio
              className='rounded-full'
            />
          </div>
          <div className='text-spacer'></div> {/* Spacer div */}
          <div className='advisor-text'>
            <h4 className='advisor-name text-xl font-bold text-gray-500'>
              {advisor.name}
            </h4>
            <p className='advisor-title text-gray-400'>{advisor.title}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Advisors
