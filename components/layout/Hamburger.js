import React, { useState } from 'react'
import Link from 'next/link';
import { categories } from '../../data/sitedata'
import { jsUcfirst } from "../../utils";

function Hamburger() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav>
            <div className="text-gray-500 w-10 h-10 relative focus:outline-none bg-transparent z-50" onClick={() => setIsOpen(!isOpen)}>
                <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
                    <span className={`block absolute  h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-300 ease-in-out ${isOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
                </div>
            </div>  
            <div className={`transform transition duration-300 fixed block md:hidden  bg-opacity-100 text-xl h-screen w-full z-40 top-0 right-0 ${isOpen ? 'visible bg-black' : 'invisible bg-transparent'}`}>
                <div className="w-full sm:w-11/12 sm:mx-auto">
                <ul className="mt-40 mx-auto text-center">
                <li className="pb-10 whitespace-nowrap" onClick={() => setIsOpen(false)}>
                    <Link href='/'>
                        <a className="text-white hover:no-underline hover:opacity-50">
                            Home
                        </a>
                    </Link>
                </li>
                {categories.map((cat, index) => (
                    <div onClick={() => setIsOpen(false)}>
                        <NavLink slug={`/gallery/${cat.category}`} name={cat.category} key={index}/>
                    </div>
                ))}
                <div onClick={() => setIsOpen(false)}>
                    <NavLink slug='/contact' name='contact' />
                </div>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Hamburger

const NavLink = ({ slug, name }) => (
    <li className="pb-10 whitespace-nowrap">
        <Link href={`${slug}`}>
            <a className="text-white hover:no-underline hover:opacity-50">
                {jsUcfirst(name)}
            </a>
        </Link>
    </li>
);