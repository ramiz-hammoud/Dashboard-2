import './globals.css'
import { ReactNode } from 'react'
import SupabaseProvider from '../components/SupabaseProvider'

export const metadata = {
  title: 'F&BALANCE Control Hub',
  description: 'Cost-control dashboard for hospitality brands',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SupabaseProvider>{children}</SupabaseProvider>
      </body>
    </html>
  )
}
