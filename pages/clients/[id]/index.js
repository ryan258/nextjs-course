import { useRouter } from 'next/router'

const ClientProjectsPage = () => {
  const router = useRouter()

  console.log(router.query)

  const loadProjectHandler = () => {
    // load data - router.push is like using the Link component, just programmatically
    // router.push('/clients/manny/projectalpha')
    // or we can pass in an object
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'manny', clientprojectid: 'projectalpha' }
    })
  }

  return (
    <div>
      <h1>Projects For [Client Name Here]</h1>
      <button onClick={loadProjectHandler}>Load Project Alpha</button>
    </div>
  )
}

export default ClientProjectsPage
