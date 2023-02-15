import Link from 'next/link'

import { Contador } from '@/components/Contador'

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <Contador />

      <Link href="/">Home</Link>
    </div>
  )
}
