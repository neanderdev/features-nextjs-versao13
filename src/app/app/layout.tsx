import { ReactNode } from 'react'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>App</h1>

      {children}
    </div>
  )
}
