// components/layout/Testimonials.tsx
import React from 'react'

interface MyComponentProps {
  text: string
  author: string
}

const Testimonial: React.FC<MyComponentProps> = ({ text, author }) => (
  <div className='testimonial'>
    <p className='text-gray-400'>{text}</p>
    <p className='text-gray-300 font-bold'>{author}</p>
  </div>
)

const Testimonials = () => {
  return (
    <section className='testimonials-section'>
      <h2 className='text-center text-2xl font-bold text-gray-300'>
        What People Say About Us
      </h2>
      <div className='testimonials-container'>
        <Testimonial
          text='RealmLink has transformed the way I play games!'
          author='Jane Doe'
        />
        {/* Add more testimonials */}
      </div>
    </section>
  )
}

export default Testimonials
