// ... is seen by Next as a catch all after /blog/...

import { useRouter } from 'next/router'

const BlogPostPage = () => {
  const router = useRouter()

  console.log(router.query) // blog/42 => slug: ["42"]

  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  )
}

export default BlogPostPage
