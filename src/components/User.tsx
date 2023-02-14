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

  return (
    <div>
      <h1>User</h1>

      <pre>{JSON.stringify(user, null, 2)}</pre>

      {/* @ts-expect-error Async Server Component */}
      <Repo />
    </div>
  )
}
