import { useMDXComponent } from 'next-contentlayer/hooks'
import { GetStaticProps, NextPage } from 'next'
import { getBlogPageUrl } from '.'
import { allBlogPosts, BlogPost } from '@/contentlayer/generated'

export interface IPostPageProps {
    post: BlogPost
}

const Post : NextPage<IPostPageProps> = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <div className='p-5 md'>
      <MDXContent />
    </div>
  )
}

export function getPostPageUrl (postSlug?: string): string {
  return `${getBlogPageUrl()}/${postSlug}`
}

export const getStaticPaths = async () => {
  return {
    paths: allBlogPosts.map(({ slug }) => ({ params: { slug } })),
    fallback: false
  }
}

export const getStaticProps : GetStaticProps = async ({ params }) => {
  const post = allBlogPosts.find(post => post.slug === params?.slug)

  return { props: { post } }
}

export default Post
