import Layout from '../../../components/layout/Layout'
import BlogHeader from '../../../components/blog/BlogHeader'
import { POSTS_PER_PAGE } from '../../blog'
import BlogLayout from '../../../components/blog/BlogLayout'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sortByDate } from '../../../utils'

export async function getStaticPaths() {
  const totalPosts = fs.readdirSync(path.join('posts'))
  const totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { page } }) {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )
    const { data: frontmatter } = matter(markdownWithMeta)
    return {
      slug,
      frontmatter,
    }
  })
  const pageNumber = parseInt(page)
  const displayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE)
  }
  return {
    props: {
      posts: posts.sort(sortByDate),
      displayPosts,
      pagination,
    },
  }
}

export default function PostPage({ posts, displayPosts, pagination }) {
  return (
    <>
    <Layout>
        <BlogHeader />
        <BlogLayout
          posts={posts}
          displayPosts={displayPosts}
          pagination={pagination}
        />
    </Layout>
    </>
  )
}
