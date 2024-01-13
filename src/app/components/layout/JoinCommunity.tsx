import React from 'react'
import FlipCard from './FlipCard' // Adjust the path as per your file structure

function JoinCommunity () {
  return (
    <FlipCard title='Join Our Community'>
      <ul className='list-disc ml-5 space-y-2'>
        <li>
          Connect with fellow gaming enthusiasts and creators in a
          collaborative, forward-thinking community.
        </li>
        <li>
          Contribute to a shared vision of gaming, where every voice has the
          power to influence the next generation of games.
        </li>
        <li>
          Enjoy exclusive early access to news, features, and community events.
        </li>
      </ul>
    </FlipCard>
  )
}

export default JoinCommunity
