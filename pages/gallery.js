import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '../components/layout/Layout'
import Gallery from '../components/Gallery'
import { sortByDate } from '../utils'

function GalleryPage({posts}) {
  return (
    <Layout>
      <Gallery posts={posts} />
    </Layout>
  );
}

export default GalleryPage;

export async function getStaticProps() {
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
  return {
    props: {
      posts: posts.sort(sortByDate),
    }
  }
}