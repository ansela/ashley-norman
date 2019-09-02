import React from 'react'

import Layout from '../components/layout'
import PostPreview from '../components/blog/post-preview'

import usePosts from '../hooks/use-posts'

const Blog = () => {
  const posts = usePosts()

  return (
    <Layout>
      {posts.map(post => <PostPreview key={post.slug} post={post} />)}
    </Layout>
  )
}

export default Blog