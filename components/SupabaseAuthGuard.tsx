'use client'
import { ReactNode, useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const supabase = createClient(supabaseUrl, supabaseAnon)

export default function SupabaseAuthGuard({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [authed, setAuthed] = useState(false)

  useEffect(() => {
    let mounted = true
    async function check() {
      const { data } = await supabase.auth.getSession()
      if (!mounted) return
      if (data.session) setAuthed(true)
      setLoading(false)
    }
    check()
    const { subscription } = supabase.auth.onAuthStateChange(() => check())
    return () => { mounted = false; subscription.unsubscribe() }
  }, [])

  if (loading) return <div className="min-h-screen flex items-center justify-center">Checking session...</div>
  if (!authed) {
    if (typeof window !== 'undefined') window.location.href = '/login'
    return null
  }

  return <>{children}</>
}
