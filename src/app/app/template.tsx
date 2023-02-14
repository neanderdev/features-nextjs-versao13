import { ReactNode } from 'react'

export default function AppTemplate({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>Template Dashboard</h1>

      {children}
    </div>
  )
}
