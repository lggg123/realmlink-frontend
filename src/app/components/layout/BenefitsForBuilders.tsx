import React from 'react'
import FlipCard from './FlipCard' // Adjust the path as per your file structure

function BenefitsForBuilders () {
  return (
    <FlipCard title='For Game Builders'>
      <ul className='list-disc ml-5 space-y-2'>
        <li>
          Leverage our robust infrastructure to build expansive and immersive
          gaming realms with ease.
        </li>
        <li>
          Utilize our SDK to integrate blockchain technology, enabling a new
          level of asset management and player engagement.
        </li>
        <li>
          Join a network of pioneers shaping the future of gaming with
          interoperable assets and shared economies.
        </li>
      </ul>
    </FlipCard>
  )
}

export default BenefitsForBuilders
