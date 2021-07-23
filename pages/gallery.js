import React from "react"
import Layout from '../components/layout/Layout'
import { SRLWrapper } from "simple-react-lightbox"
import { sortByDate } from '../utils'

function Gallery({posts}) {
  console.log(posts)
  return (
    <Layout>
      <SRLWrapper>
        {/* {data && 
          <div className="w-full flex justify-start flex-wrap">
            {data.map((d) => (
              <a href={d.image} className="w-full sm:w-1/2 lg:w-1/3 p-3">
                <img src={d.thumbnail} alt={d.alt} />
              </a>
            ))}
          </div>
        } */}
      </SRLWrapper>
    </Layout>
  );
}

export default Gallery;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('gallery'))
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
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