import { NextPage } from 'next'
import { compareDesc } from 'date-fns'
import { allBlogPosts, BlogPost } from '@/contentlayer/generated'

import { BlogPostCard } from '@/components/pages/blog/BlogPostCard'

export interface IBlogPageProps {
  posts: BlogPost[]
}

const Blog : NextPage<IBlogPageProps> = ({ posts }) => {
  return (
    <div className='p-5 m-auto max-w-screen-xl'>
      {
        posts.map(post =>
          <BlogPostCard
            key={post._id}
            post={post} />)
      }
    </div>
  )
}

export function getBlogPageUrl () : string {
  return '/blog'
}

export async function getStaticProps () {
  const posts = allBlogPosts.sort((a, b) => {
    return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  })
  return { props: { posts } }
}

export default Blog
