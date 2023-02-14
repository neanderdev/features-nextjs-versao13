import { ReactNode } from 'react'

export default function RootTemplate({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>Template App</h1>

      {children}
    </div>
  )
}
