import Link from 'next/link'

import { User } from '@/components/User'

export default async function Home() {
  // const [resp1, resp2] = await Promise.all(fetch('api1'), fetch('ap2'))

  return (
    <div>
      <h1>Home</h1>

      {/* @ts-expect-error Async Server Component */}
      <User />

      <Link href="/app">Dashboard</Link>
    </div>
  )
}
