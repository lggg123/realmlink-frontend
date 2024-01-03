import React, { useState } from 'react'

function FlipCard ({ title, children }) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  // Additional container to handle the flipping and provide a background
  return (
    <div
      className='flip-card-container mx-auto my-12 max-w-md'
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
          <div className='flip-card-front text-gray-300 p-8 flex items-center justify-center'>
            <h2 className='text-3xl font-bold'>{title}</h2>
          </div>
          <div className='flip-card-back text-gray-300 p-8 flex items-center justify-center'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlipCard
