import { ReactNode } from 'react'

export default function AuthTemplate({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>Template Auth</h1>

      {children}
    </div>
  )
}
