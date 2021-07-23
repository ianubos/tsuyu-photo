import React from 'react'
import Link from 'next/link'

export default function BlogCard({ title, description, date, category, slug }) {
    return (
        <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">{category && ( category )}</span>
                <span className="mt-1 text-gray-500 text-sm">{date && (date)}</span>
            </div>
            <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{title}</h2>
                <p className="leading-relaxed">{description}</p>
                <Link href={slug}>
                    <a className="text-indigo-500 inline-flex items-center mt-4 cursor-pointer">続きを読む
                        <svg height="1rem" marginleft="0.5rem" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </Link>
            </div>
        </div>
    )
}
