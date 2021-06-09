// the square brackets in the file name tell next.js that this is meant to be dynamic
// and that [something] is just a placeholder
// good for pages that share the same sort of data

// this will let us read from the url - a class based component would be {withRouter}
import { useRouter } from 'next/router'

const PortfolioProjectPage = () => {
  const router = useRouter() // lotsa methods and data we can use from this

  console.log(router.pathname) // /portfolio/[projectid] - path inferred by next.js
  console.log(router.query) // {projectid: "dictionaries"} - gives us access to the data in the URL

  // we could send a request to some backend server
  // to fetch the piece of data w/ an id or router.query.projectid

  return (
    <div>
      <h1>A Groovy Portfolio Project Page</h1>
    </div>
  )
}

export default PortfolioProjectPage
