import { NextPage } from "next"
import { compareDesc } from "date-fns"
import { allBlogPosts, BlogPost } from "@/contentlayer/generated"

import { BlogPostCard } from "@/components/pages/blog/BlogPostCard"
import { PageContainer } from "@/components/layouts/PageContainer"

export interface IBlogPageProps {
  posts: BlogPost[]
}

const BlogPage: NextPage<IBlogPageProps> = ({ posts }) => {
  return (
    <PageContainer>
      <div className="m-auto max-w-screen-xl p-5">
        {posts.map((post) => (
          <BlogPostCard key={post._id} post={post} />
        ))}
      </div>
    </PageContainer>
  )
}

export function getBlogPageUrl(): string {
  return "/blog"
}

export async function getStaticProps() {
  const posts = allBlogPosts.sort((a, b) => {
    return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  })
  return { props: { posts } }
}

export default BlogPage
