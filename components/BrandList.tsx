'use client'
import { useEffect, useState } from 'react'
import { createClient, PostgrestError } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const supabase = createClient(supabaseUrl, supabaseAnon)

type Brand = {
  id: string
  name: string
  city?: string
  country?: string
  created_at?: string
}

export default function BrandList() {
  const [brands, setBrands] = useState<Brand[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchBrands()
  }, [])

  async function fetchBrands() {
    setLoading(true)
    setError(null)
    try {
      const { data, error } = await supabase.from('brands').select('*').order('created_at', { ascending: false })
      if (error) throw error
      setBrands(data as Brand[])
    } catch (err: any) {
      setError(err.message || 'Failed to load')
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div>Loading brands...</div>
  if (error) return <div className="text-red-600">{error}</div>

  if (brands.length === 0) return <div className="p-6 bg-white rounded shadow">No brands yet.</div>

  return (
    <div className="grid gap-4">
      {brands.map((b) => (
        <div key={b.id} className="p-4 bg-white rounded shadow flex justify-between items-center">
          <div>
            <div className="text-lg font-medium">{b.name}</div>
            <div className="text-sm text-secondaryText">{b.city}, {b.country}</div>
          </div>
          <div className="text-sm text-secondaryText">{b.created_at?.slice(0,10)}</div>
        </div>
      ))}
    </div>
  )
}
