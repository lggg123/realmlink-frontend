// components/Register.tsx
import React, { useState } from 'react'

interface RegisterProps {
  walletAddress: string
}

interface RegisterFormData {
  email: string
}

const Register: React.FC<RegisterProps> = ({ walletAddress }) => {
  const [formData, setFormData] = useState<RegisterFormData>({ email: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [registrationCompleted, setRegistrationCompleted] = useState(false)
  const [registrationError, setRegistrationError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!walletAddress) {
      alert('Please connect your wallet first.')
      return
    }
    setIsSubmitting(true)

    const requestBody = {
      ...formData,
      walletAddress
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      })
      const data = await response.json()
      if (response.ok) {
        setRegistrationCompleted(true)
      } else {
        throw new Error(data.error || 'Registration failed')
      }
    } catch (error: unknown) {
      // Now explicitly stating the type as unknown
      // Perform a type check
      if (error instanceof Error) {
        setRegistrationError(error.message)
      } else {
        // If it's not an Error instance, you might want to handle it differently
        setRegistrationError('An unexpected error occurred')
      }
    }
  }

  return (
    <>
      <div className='text-center p-6 bg-zinc-800 text-white rounded-lg shadow-md mb-6'>
        <h2 className='text-2xl font-bold mb-3'>
          Join the Realmlink Community
        </h2>
        <p className='mb-3'>
          Be the first to discover exciting news, exclusive features, and
          game-changing updates. Join our community and receive timely
          notifications. Register now to qualify for exclusive airdrops!
        </p>
        {registrationCompleted && (
          <p className='text-green-500'>Registration successful!</p>
        )}
        {registrationError && (
          <p className='text-red-500'>{registrationError}</p>
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        className='bg-zinc-800 p-6 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center gap-4'
      >
        <div className='flex-grow'>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-300'
          >
            Email Address
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            className='bg-gray-700 text-white w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            disabled={registrationCompleted}
          />
        </div>
        <button
          type='submit'
          className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out'
          disabled={isSubmitting || registrationCompleted}
        >
          {isSubmitting && (
            <div className='absolute inset-0 flex items-center justify-center'>
              <div
                className='spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full'
                role='status'
              >
                <span className='visually-hidden'></span>
              </div>
            </div>
          )}
          {registrationCompleted ? 'Registered' : 'Register'}
        </button>
      </form>
    </>
  )
}

export default Register
