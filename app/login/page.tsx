'use client'

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const supabase = createClient(supabaseUrl, supabaseAnon)

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  async function signIn(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setMessage(null)
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      setMessage('Login successful — redirecting...')
      window.location.href = '/'
    } catch (err: any) {
      setMessage(err.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutralBg">
      <div className="w-full max-w-md p-8 bg-white rounded shadow">
        <img src="/brand/logo.jpg" alt="F&BALANCE" className="h-12 object-contain mb-4" />
        <h2 className="text-xl font-semibold mb-4">Sign in</h2>
        <form onSubmit={signIn} className="space-y-4">
          <div>
            <label className="block text-sm text-secondaryText">Email</label>
            <input className="w-full mt-1 p-2 border rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm text-secondaryText">Password</label>
            <input type="password" className="w-full mt-1 p-2 border rounded" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="w-full py-2 bg-brand text-white rounded" disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</button>
        </form>
        {message && <p className="mt-4 text-sm">{message}</p>}
        <div className="mt-4 flex justify-between text-sm">
          <a href="/forgot-password" className="text-action">Forgot password?</a>
          <a href="/" className="text-secondaryText">Back</a>
        </div>
      </div>
    </div>
  )
}
