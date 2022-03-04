import { useMDXComponent } from 'next-contentlayer/hooks'
import { GetStaticProps, NextPage } from 'next'
import { getBlogPageUrl } from '.'
import { allBlogPosts, BlogPost } from '@/contentlayer/generated'
import { PageContainer } from '@/components/layouts/PageContainer'

export interface IBlogPostPageProps {
    post: BlogPost
}

const BlogPostPage : NextPage<IBlogPostPageProps> = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <PageContainer>
      <div className='p-5 md'>
        <MDXContent />
      </div>
    </PageContainer>
  )
}

export function getBlogPostPageUrl (postSlug?: string): string {
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

export default BlogPostPage
