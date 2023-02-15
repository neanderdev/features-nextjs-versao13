import Link from 'next/link'
import { Suspense } from 'react'

import { User } from '@/components/User'
import { Repo } from '@/components/Repo'

export default async function Home() {
  // const [resp1, resp2] = await Promise.all(fetch('api1'), fetch('ap2'))

  return (
    <div>
      <h1>Home</h1>

      <Suspense fallback={<p>Carregando repositórios...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <Repo />

        <Link href="/app">Dashboard</Link>
      </Suspense>

      <Suspense fallback={<p>Carregando usuário...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <User />

        <Link href="/app">Dashboard</Link>
      </Suspense>
    </div>
  )
}
