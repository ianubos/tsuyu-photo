import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Layout from '../../components/layout/Layout'
import BlogHeader from '../../components/blog/BlogHeader'
import 'github-markdown-css/github-markdown.css'

const ImageContainer = styled.div`
  width: 100%;

  > div {
    position: unset !important;
  }

  .post-image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  const router = useRouter()

  return (
    <Layout>
      <BlogHeader />
      <main className='mx-auto px-4 mt-10 sm:mt-14 mb-10' style={{maxWidth: 838}}>
          <p className='flex items-center justify-center my-4'>{date}</p>
          <h1 className='text-2xl sm:text-5xl font-extrabold flex items-center justify-center mb-8'>{title}</h1>
          <ImageContainer>
            <Image 
              className={'post-image'}
              src={cover_image} 
              layout="fill"
            />
          </ImageContainer>
          <div className='markdown-body'>
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </div>
          <button 
            className='flex mx-auto my-14 items-center px-4 py-2 bg-white rounded-md text-gray-700 hover:underline cursor-pointer' 
            onClick={() => router.back()}>
            一覧に戻る
          </button>
      </main>
    </Layout>
  )
}


export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}


export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}
