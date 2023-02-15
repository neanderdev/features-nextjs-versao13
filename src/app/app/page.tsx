import Link from 'next/link'

import { Contador } from '@/components/Contador'

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <Contador />

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link href="/app/products/12">Produto 12</Link>

        <Link href="/">Home</Link>
      </div>
    </div>
  )
}
