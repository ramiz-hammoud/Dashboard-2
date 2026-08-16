import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full p-8 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-semibold text-brand">F&BALANCE Control Hub</h1>
        <p className="mt-4 text-secondaryText">Welcome — this is a scaffolded starter. Use the sidebar to navigate once signed in.</p>
        <div className="mt-6 flex gap-3">
          <Link href="/login" className="px-4 py-2 bg-action text-white rounded">Login</Link>
          <Link href="/brands" className="px-4 py-2 border rounded">Brands</Link>
        </div>
      </div>
    </main>
  )
}
