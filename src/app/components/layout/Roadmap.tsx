// components/layout/Roadmap.tsx
import React from 'react'

const Roadmap = () => {
  const events = [
    {
      date: '2023 - Q4',
      title: 'Concept Inception',
      description:
        'Initial development of the RealmLink idea, team formation, market analysis.'
    },
    {
      date: '2024 - Q1',
      title: 'Platform Development Kick-off',
      description:
        'Begin the development of the RealmLink platform, leveraging our advisors’ expertise in blockchain technology and software development.'
    },
    {
      date: '2024 - Q1',
      title: 'Strategic Partnerships',
      description:
        'Forge strategic partnerships, guided by our business and partnerships advisors, to enrich the RealmLink ecosystem and offer more value to users.'
    },
    {
      date: '2024 - Q3',
      title: 'Alpha Release of RealmLink',
      description:
        'Launch an alpha version for community feedback, focusing on user experience and security, reflecting the input from our strategic and security advisors.'
    },
    {
      date: '2024 - Q4',
      title: 'Community Building Initiatives',
      description:
        'Expand community outreach and engagement, with events and programs designed by our community and growth advisors to foster a strong user base.'
    },
    {
      date: '2025 - Q1',
      title: 'Beta Launch & User Testing',
      description:
        'Introduce a beta release of RealmLink, incorporating data-driven enhancements and initiating extensive user testing phases.'
    },
    {
      date: '2025 - Q2',
      title: 'Integration of Additional Gaming Realms',
      description:
        'Expand the platform by integrating additional gaming realms, using insights from our creative and technical advisors to enhance diversity and user experience.'
    },
    {
      date: '2025 - Q3',
      title: 'Security Audits & Compliance',
      description:
        'Conduct comprehensive security audits and ensure compliance with regulations, leveraging the expertise of our security and legal advisors.'
    },
    {
      date: '2025 - Q4',
      title: 'Official Launch',
      description:
        'Officially launch the RealmLink platform with a full feature set, ensuring a robust and secure experience for all users.'
    },
    {
      date: '2026 - Q1',
      title: 'User-Driven Feature Expansion',
      description:
        'Implement user-requested features and enhancements based on extensive community feedback and engagement metrics.'
    },
    {
      date: '2026 - Q2',
      title: 'Global Marketing Campaign',
      description:
        'Launch a global marketing campaign to expand user base and brand recognition, leveraging insights from our marketing and business development advisors.'
    }
    // ...continue adding events as needed
  ]

  return (
    <section className='roadmap-section brand-black py-8 rounded-lg shadow-xl'>
      <h2 className='text-center text-3xl font-bold text-brand-green-light mb-10'>
        Our Roadmap
      </h2>
      <div className='timeline-container'>
        {events.map((event, index) => (
          <div
            key={index}
            className='timeline-item bg-secondary-navy-blue border-2 border-brand-green-dark hover:bg-secondary-slate-blue rounded-lg shadow-lg p-6 mb-6 transition duration-300 ease-in-out transform hover:scale-105'
          >
            <div className='timeline-content'>
              <span className='timeline-time text-lg text-brand-green-light font-semibold'>
                {event.date}
              </span>
              <h3 className='timeline-title text-2xl text-primary-white font-bold my-2'>
                {event.title}
              </h3>
              <p className='timeline-description text-primary-white'>
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .timeline-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .timeline-item {
          width: 90%;
          max-width: 800px;
        }
        .timeline-time {
          display: inline-block;
          margin-bottom: 0.5rem;
        }
        .timeline-title {
          line-height: 1.2;
        }
        // Additional styles can be added here if needed
      `}</style>
    </section>
  )
}

export default Roadmap
