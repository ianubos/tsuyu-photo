import React from 'react'
import Pagination from './Pagination'
import BlogCard from './BlogCard'
import Container from '../general/Container'

function BlogLayout({ posts, displayPosts = [], pagination }) {
    return (
        <section className="text-gray-600 body-font overflow-hidden my-16 mx-3 sm:mx-0">
            <Container>
                {displayPosts.map((post, index) => (
                    <BlogCard 
                        title={post.frontmatter.title}
                        description={post.frontmatter.excerpt}
                        date={post.frontmatter.date}
                        slug={`/blog/${post.slug}`}
                        category='3Dプリンター'
                        key={index}
                    />
                ))}
                <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
            </Container>
        </section>
    )
}

export default BlogLayout
