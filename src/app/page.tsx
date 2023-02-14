import Link from 'next/link'

import { User } from '@/components/User'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      {/* @ts-expect-error Async Server Component */}
      <User />

      <Link href="/app">Dashboard</Link>
    </div>
  )
}
