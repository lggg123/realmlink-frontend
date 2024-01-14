import React, { useState, ReactNode } from 'react'
import Link from 'next/link'

interface FlipCardProps {
  title: string
  children: ReactNode
  buttonLabel?: string // Optional label for the button
  buttonUrl?: string // Optional URL for the button
  showButton?: boolean // Optional flag to show the button
}

function FlipCard ({
  title,
  children,
  buttonLabel,
  buttonUrl,
  showButton
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div
      className='flip-card-container mx-2 my-12 max-w-md'
      onClick={handleFlip}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`flip-card bg-gray-800 rounded-lg shadow-xl cursor-pointer ${
          isFlipped ? 'is-flipped' : ''
        }`}
      >
        <div className='flip-card-inner'>
          <div className='flip-card-front text-gray-300 p-8 flex flex-col items-center justify-center'>
            <h2 className='text-3xl font-bold'>{title}</h2>
          </div>
          <div className='flip-card-back text-white p-8 flex flex-col items-center justify-center'>
            {children}
            {showButton && buttonLabel && buttonUrl && (
              <Link
                href={buttonUrl}
                className='mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-medium cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1'
              >
                {buttonLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlipCard
