// export const revalidate = 30

export async function Repo() {
  const response = await fetch(
    'https://api.github.com/users/neanderdev/repos',
    {
      // next: {
      //   revalidate: 30,
      // },
      cache: 'no-store',
    },
  )
  const repos = await response.json()

  return (
    <div>
      <h1>Repos</h1>

      <pre>{JSON.stringify(repos, null, 2)}</pre>
    </div>
  )
}
