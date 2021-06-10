import Link from 'next/link'

const ClientsPage = () => {
  const clients = [
    { id: 'manny', name: 'Manny the Manatee' },
    { id: 'orson', name: 'Orson the Cow' }
  ]

  return (
    <div>
      <h1>The Clients Page!</h1>
      <ul>
        {/* <li>
          <Link href="/clients/manny">Manny</Link>
        </li>
        <li>
          <Link href="/clients/orson">Orson</Link>
        </li> */}
        {clients.map((client) => (
          <li key={client.id}>
            {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
            {/* ALT: vvv instead of a path you can provide an object to your Link */}
            <Link
              href={{
                pathname: '/clients/[id]',
                query: {
                  id: client.id
                }
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ClientsPage
