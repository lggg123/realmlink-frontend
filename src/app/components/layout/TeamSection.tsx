// components/layout/TeamSection.tsx
import React from 'react'
import Image from 'next/image'

interface TeamMember {
  name: string
  photo: string
  title: string
}

interface TeamSectionProps {
  teamType: string
  teamMembers: TeamMember[]
}

const TeamSection: React.FC<TeamSectionProps> = ({ teamType, teamMembers }) => {
  return (
    <div className='text-center'>
      <h1 className='text-4xl text-gray-300 font-bold mb-8'>{teamType}</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {teamMembers.map((member, index) => (
          <div key={index} className='flex flex-col items-center mb-4'>
            <Image
              src={member.photo}
              alt={member.name}
              width={200}
              height={200}
              className='rounded-full'
            />
            <div className='text-sm mt-2'>
              <h4 className='text-xl text-gray-500 font-bold'>{member.name}</h4>
              <p className='text-gray-400'>{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamSection
