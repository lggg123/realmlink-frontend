import React from 'react'
import FlipCard from './FlipCard' // Adjust the path as per your file structure

function FeaturesSection () {
  return (
    <FlipCard title='Key Features'>
      <ul>
        <li>Interoperability across games</li>
        <li>Blockchain-based asset management</li>
        <li>Community-driven development</li>
        {/* Add more features as needed */}
      </ul>
    </FlipCard>
  )
}

export default FeaturesSection
