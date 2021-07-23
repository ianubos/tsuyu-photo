import React from "react"
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { categories } from '../data/sitedata'

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
    <main className="w-full sm:w-4/5 h-full bg-darkest mx-auto box-border">
        <div
            className="w-full h-full font-oswaldRegular"
            style={{ minHeight: "500px" }}
        >
            {/* <h2 className="text-gray-400 font-bold text-2xl font-oswaldRegular p-4 mx-4">Category</h2> */}
            <ul className="w-full flex flex-wrap px-4">
                {categories.map((cat) => 
                <>
                    <Link href={`/${cat.category}`}>
                        <a className="text-gray-400 w-full sm:w-1/2 p-4 hover:text-gray-200 transition">
                            <ImageContainer>
                                <Image 
                                    className={'post-image'}
                                    src={cat.photo} 
                                    layout="fill"
                                />
                            </ImageContainer>
                        </a>
                    </Link>
                    <p className="text-lg w-full flex justify-center pt-8">{cat.category}</p>
                    </>
                )}
            </ul>
        </div>
    </main>
  );
}

export default MainContent
