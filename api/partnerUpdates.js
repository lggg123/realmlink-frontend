// /api/partnerUpdates.js

import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Allowed origin (your website URL)
const allowedOrigin = 'https://www.realmlink.online'

export default async function handler (req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', allowedOrigin)
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  // Respond to CORS preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method === 'POST') {
    // Ensure the request comes from the allowed origin
    if (req.headers.origin !== allowedOrigin) {
      res.status(403).json({ message: 'Forbidden' })
      return
    }

    // Get email and walletAddress from request body
    const { email, walletAddress } = req.body

    try {
      // Insert a new record into the 'users' table
      const { data, error } = await supabase
        .from('users')
        .insert([{ email, wallet_address: walletAddress }])

      // If there's an error, return it
      if (error) throw error

      // Otherwise, return the inserted data
      res.status(200).json({ message: 'Successful Register' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  } else {
    // Handle any other HTTP methods
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
