import { useRouter } from 'next/router'

const ClientProjectsPage = () => {
  const router = useRouter()

  console.log(router.query)

  return (
    <div>
      <h1>Projects For [Client Name Here]</h1>
    </div>
  )
}

export default ClientProjectsPage
