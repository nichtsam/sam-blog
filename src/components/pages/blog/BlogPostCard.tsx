import React from 'react'
import { Link } from '@/components/shared/Link'
import type { BlogPost } from '@/contentlayer/generated'
import { getPostPageUrl } from '@/pages/blog/[slug]'

export interface IBlogPostCardProps {
  post: BlogPost
}

export const BlogPostCard : React.FC<IBlogPostCardProps> = ({ post }) =>
  <Link
    href={getPostPageUrl(post.slug)}>
    <div
      key={post.slug}
      className='p-5 mb-5 rounded-md border-2 border-black dark:border-gray-50'>
      <p className='text-2xl font-semibold'>{post.title}</p>
      <p className='mb-2 ml-2 text-sm'>{post.author}</p>
      <p className='text-lg'>{post.summary}</p>
    </div>
  </Link>
