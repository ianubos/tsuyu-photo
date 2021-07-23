  
import React from 'react'
import Header from './Header'
import Meta from './Meta'
import Footer from './Footer'
import SimpleReactLightbox from 'simple-react-lightbox'

function Layout({children}) {
    return (
        <>
        <Meta />
        <Header />
        <SimpleReactLightbox>
            <main>
                {children}
            </main>
        </SimpleReactLightbox>
        <Footer />
        </>
    )
}

export default Layout