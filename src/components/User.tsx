import { cookies, headers } from 'next/headers'

import { Repo } from './Repo'

// export const revalidate = 30

export async function User() {
  const response = await fetch('https://api.github.com/users/neanderdev', {
    // next: {
    //   revalidate: 30,
    // },
    cache: 'no-store',
  })
  const user = await response.json()

  const userCookies = cookies()
  const userHeaders = headers()

  return (
    <div>
      <h1>User</h1>

      <pre>{JSON.stringify(userCookies.getAll(), null, 2)}</pre>
      <pre>{JSON.stringify(userCookies.get('pegar_cookie'), null, 2)}</pre>

      <pre>{JSON.stringify(userHeaders.entries(), null, 2)}</pre>

      <pre>{JSON.stringify(user, null, 2)}</pre>

      {/* @ts-expect-error Async Server Component */}
      <Repo />
    </div>
  )
}
