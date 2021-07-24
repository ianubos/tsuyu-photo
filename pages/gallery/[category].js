import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '../../components/layout/Layout'
import { categories } from '../../data/sitedata'
import Gallery from '../../components/Gallery'
import { sortByDate } from '../../utils'

export default function PostPage({ posts, category }) {
  return (
    <Layout>
      <Gallery posts={posts} category={category}/>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = categories.map((cat) => ({
    params: {
      category: cat.category,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { category } }) {
  const files = fs.readdirSync(path.join('gallery'))
  const posts = files
    .map((filename) => {
      const markdownWithMeta = fs.readFileSync(
        path.join('gallery', filename),
        'utf-8'
      )
      const { data: frontmatter } = matter(markdownWithMeta)
      return frontmatter
    })
    .filter(frontmatter => frontmatter.category === category)

  return {
    props: {
      posts: posts.sort(sortByDate),
      category
    },
  }
}

