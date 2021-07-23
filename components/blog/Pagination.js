import React from 'react'
import Link from 'next/link'

function Pagination({ totalPages, currentPage }) {
    const prevPage = parseInt(currentPage) - 1 > 0
    const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)
    const classNames = (isExist) => `flex items-center px-4 py-2 mx-1 bg-white rounded-md ${isExist ? "text-gray-700 hover:bg-indigo-600 hover:text-white cursor-pointer" : "text-gray-500 cursor-not-allowed"}`
    return (
      <div className="flex w-full justify-center mt-5 mb-10">
        <nav className="flex justify-between">
          {!prevPage && (
            <button rel="previous" className={classNames(prevPage)} disabled={!prevPage}>
              Previous
            </button>
          )}
          {prevPage && (
            <Link href={currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`}>
              <button rel="previous" className={classNames(prevPage)}>Previous</button>
            </Link>
          )}
          <span className='flex items-center sm:mx-10'>
            {currentPage} of {totalPages}
          </span>
          {!nextPage && (
            <button rel="next"  className={classNames(nextPage)} disabled={!nextPage}>
              Next
            </button>
          )}
          {nextPage && (
            <Link href={`/blog/page/${currentPage + 1}`}>
              <button className={classNames(nextPage)} rel="next">Next</button>
            </Link>
          )}
        </nav>
      </div>
    )
  }


export default Pagination
