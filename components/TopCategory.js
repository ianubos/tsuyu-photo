import React from "react"
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { categories } from '../data/sitedata'
import { jsUcfirst } from '../utils'

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

function MainContent() {
  return (
    <main className="w-full h-full bg-darkest mx-auto box-border scroll-snap-y pt-8">
        <div className="w-full h-full font-oswaldRegular" style={{ minHeight: "500px" }}>
            {/* <h2 className="text-gray-400 font-bold text-2xl font-oswaldRegular p-4 mx-4">Category</h2> */}
            <ul className="w-full flex flex-wrap px-4">
                {categories && categories.map((cat, index) => 
                  <div className='flex flex-col w-full sm:w-1/2 text-gray-400 hover:text-gray-200 transition px-4' key={index}>
                      <Link href={`/gallery/${cat.category}`}>
                          <a className=" transition">
                              <ImageContainer>
                                  <Image 
                                      className={'post-image'}
                                      src={cat.photo} 
                                      layout="fill"
                                  />
                              </ImageContainer>
                          </a>
                      </Link>
                      <p className="text-lg w-full flex justify-center py-8">{jsUcfirst(cat.category)}</p>
                  </div>
                )}
            </ul>
        </div>
    </main>
  );
}

export default MainContent
