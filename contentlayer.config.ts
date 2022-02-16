import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const BlogPost = defineDocumentType(() => ({
  name: 'BlogPost',
  filePathPattern: 'blog/*.mdx',
  fields: {
    title: { type: 'string', required: true },
    author: { type: 'string', required: true },
    publishedAt: { type: 'date', required: true },
    summary: { type: 'string', required: true }
  },
  contentType: 'mdx',
  computedFields: {
    slug: {
      type: 'string',
      resolve: doc => doc._raw.sourceFileName.replace(/\.mdx$/, '')
    }
  }

}))

export default makeSource({
  contentDirPath: 'src/data',
  documentTypes: [BlogPost]
})
