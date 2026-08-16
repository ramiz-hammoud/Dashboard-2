import Link from 'next/link'
import SupabaseAuthGuard from '../../components/SupabaseAuthGuard'
import BrandList from '../../components/BrandList'

export default async function BrandsPage() {
  return (
    <SupabaseAuthGuard>
      <div className="min-h-screen p-6 bg-neutralBg">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold">Brands</h1>
            <Link href="/brands/new" className="px-3 py-2 bg-action text-white rounded">Add Brand</Link>
          </div>
          <BrandList />
        </div>
      </div>
    </SupabaseAuthGuard>
  )
}
