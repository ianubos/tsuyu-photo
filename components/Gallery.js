import React from "react"
import { SRLWrapper } from "simple-react-lightbox"
import styled from 'styled-components'
import Image from 'next/image'

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

function Museum({posts}) {
  return (
      <div className='bg-gray-900 w-full h-full min-h-screen'>
        <SRLWrapper>
            <div className="w-full flex justify-start flex-wrap">
                {posts.map((d) => (
                    <ImageContainer>
                        <Image className={'post-image'} src={d.photo} layout="fill" />
                    </ImageContainer>
                ))}
            </div>
        </SRLWrapper>
      </div>
  );
}

export default Museum;

