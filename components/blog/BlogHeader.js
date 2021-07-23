import React from 'react'
import Image from 'next/image'
import Container from '../general/Container'

function BlogHeader() {
    return (
        <section className='w-full overflow-hidden relative h-80 sm:h-96'>
            <Image 
                className='w-full h-full box-border z-0'
                src="/images/sample-business.jpg" 
                layout="fill"
                objectFit="cover"
                objectPosition='50% 50%'
            />
            <span className='bg-blue-900 opacity-80 w-full h-full absolute top-0 left-0 z-10'></span>
            <div className='z-20 h-full w-full relative flex justify-center items-center'>
                <Container>
                    <div className="px-4 sm:px-0 py-16 mx-auto h-full">
                        <div className="items-center lg:flex">
                            <div className="w-full lg:w-1/2">
                                <div className="lg:max-w-lg">
                                    <h1 className="text-xl font-semibold lg:text-3xl tracking-wider"><span className="text-white">グーテンベルクの<strong className='text-blue-300'>ブログ</strong></span></h1>
                                    <p className="mt-4 text-gray-300 text-sm sm:text-base ">開発中の３Dプリンターやサービス展開の情報を発信します。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default BlogHeader
