import React from 'react'
import Image from 'next/image'

interface Advisor {
  name: string
  photo: string
  title: string
  description?: string
}

interface AdvisorsProps {
  advisors: Advisor[]
}

const Advisors: React.FC<AdvisorsProps> = ({ advisors }) => {
  return (
    <div className='advisors-container border-2 border-brand-green-dark rounded-lg p-4 text-center'>
      <h1 className='text-3xl text-primary-white font-bold mb-8 '>Advisors</h1>
      <div className='advisors-grid grid grid-cols-1 md:grid-cols-3 gap-4'>
        {advisors.map((advisor, index) => (
          <div key={index} className='advisor-card p-4'>
            <div className='image-container relative w-32 h-32 mb-4 rounded-full overflow-hidden'>
              <Image
                src={advisor.photo}
                alt={advisor.name}
                layout='fill' // Use 'fill' to cover the container
                objectFit='cover' // Ensures the image covers the area without stretching
              />
            </div>
            <div className='advisor-text'>
              <h4 className='advisor-name text-xl font-bold text-primary-white'>
                {advisor.name}
              </h4>
              <p className='advisor-title text-primary-white'>
                {advisor.title}
              </p>
              <p className='advisor-description text-primary-white'>
                {advisor.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Advisors
