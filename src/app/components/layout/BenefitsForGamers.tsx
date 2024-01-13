import React from 'react'
import FlipCard from './FlipCard' // Adjust the path as per your file structure

function BenefitsForGamers () {
  return (
    <FlipCard title='For Gamers'>
      <ul className='list-disc ml-5 space-y-2'>
        <li>
          Experience continuity in your gaming journey with universal character
          and item portability across multiple genres.
        </li>
        <li>
          Take ownership of your game assets thanks to blockchain technology,
          ensuring your items and achievements are uniquely yours.
        </li>
        <li>
          Engage in a new dimension of gaming where your actions and decisions
          have real-world value and impact.
        </li>
      </ul>
    </FlipCard>
  )
}

export default BenefitsForGamers
