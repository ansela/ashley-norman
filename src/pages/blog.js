import React from 'react'

import Layout from '../components/layout'

import usePosts from '../hooks/use-posts'

const Blog = () => {
  const posts = usePosts()

  return (
    <Layout>
      {posts.map(post => <pre>{JSON.stringify(post, null, 2)}å</pre>)}
    </Layout>
  )
}

export default Blog