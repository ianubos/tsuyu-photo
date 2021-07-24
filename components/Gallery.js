import React from "react"
import { SRLWrapper } from "simple-react-lightbox"
import styled from 'styled-components'
import Image from 'next/image'
import { jsUcfirst } from '../utils'

const ImageContainer = styled.div`
  width: 100%;
  flex: 1 1 350px;
  padding: 4px;

  > div {
    position: unset !important;
  }

  .post-image {
    object-fit: contain;
    position: relative !important;
    height: unset !important;
    width: 100% !important;
  }
`

const Container = styled.div`
  margin: auto;
  padding: 0 10px;
  width: 100%;
  max-width: 1600px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 4px;
  @media (min-width: 640px) {
      grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

function Gallery({posts, category}) {
  console.log(posts)
  return (
      <main className='bg-darkest w-full h-full min-h-screen pb-0-10 flex flex-col mx-auto'>
          {category && (
            <h1 className='text-gray-200 text-2xl flex justify-center items-center py-12 sm:py-24'>{jsUcfirst(category)}</h1>
          )}
          <SRLWrapper>
              <Container>
                  {posts.map((d) => (
                      <ImageContainer>
                          <Image className={'post-image'} src={d.photo} layout="fill" />
                      </ImageContainer>
                  ))}
              </Container>
          </SRLWrapper>
      </main>
  );
}

export default Gallery;

