import React from 'react'
import FlipCard from './FlipCard' // Adjust the path as per your file structure

function FeaturesSection () {
  return (
    <FlipCard title='Key Features'>
      <ul>
        <li>Universal Character and Item Portability Across Multiple Genres</li>
        <li>
          Blockchain-empowered Asset Ownership for Gamers and Efficient
          Management for Builders
        </li>
        <li>
          Shape Your Gaming World: Participate in Community-Driven Game
          Development
        </li>
        {/* Add more features as needed */}
      </ul>
    </FlipCard>
  )
}

export default FeaturesSection
