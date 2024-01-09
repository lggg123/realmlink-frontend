import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export const PrivacyPolicyPopup = () => {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('privacyPolicyConsent')
    if (consent !== 'given') {
      setShowPopup(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('privacyPolicyConsent', 'given')
    setShowPopup(false)
  }

  if (!showPopup) {
    return null
  }

  return (
    <div className='privacy-policy-popup'>
      <div className='privacy-policy-content'>
        <h2>Privacy Policy Consent</h2>
        <p>
          We use cookies to enhance your experience. By continuing to visit this
          site you agree to our use of cookies.
          <Link href='https://privacypolicy-ruby.vercel.app'>Learn more</Link>
        </p>
        <button onClick={handleAccept}>I Agree</button>
      </div>
    </div>
  )
}
