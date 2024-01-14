import React from 'react'
import Image from 'next/image'

interface TeamMember {
  name: string
  photo: string
  title: string
  description?: string // Optional short description field
}

interface TeamSectionProps {
  teamType: string
  teamMembers: TeamMember[]
}

const TeamSection: React.FC<TeamSectionProps> = ({ teamType, teamMembers }) => {
  return (
    <div className='team-section-container p-4 border-2 border-brand-green-dark rounded-lg shadow-xl'>
      <h1 className='team-type-title text-3xl text-primary-white font-bold mb-8 text-center'>
        {teamType}
      </h1>
      <div className='team-grid grid grid-cols-1 md:grid-cols-3 gap-4'>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className='team-member-card flex flex-col items-center mb-4 pt-4 pb-6 px-4 rounded-lg shadow-md text-center w-64' // Fixed width of 16rem (64 * 0.25 = 16rem)
          >
            <div className='team-member-image rounded-full border-2 border-brand-green-dark overflow-hidden mb-4'>
              <Image
                src={member.photo}
                alt={member.name}
                width={200}
                height={200}
                className='rounded-full'
              />
            </div>
            <div className='team-member-info text-sm mt-2'>
              <h4 className='team-member-name text-xl text-primary-white font-bold'>
                {member.name}
              </h4>
              <p className='team-member-title text-primary-white'>
                {member.title}
              </p>
              {member.description && (
                <p className='team-member-description text-primary-white text-sm mt-1'>
                  {member.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamSection
