'use client'
import { createClient } from '@supabase/supabase-js'
import { ReactNode } from 'react'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const supabase = createClient(supabaseUrl, supabaseAnon)

export default function SupabaseProvider({ children }: { children: ReactNode }) {
  return <SessionContextProvider supabaseClient={supabase}>{children}</SessionContextProvider>
}
