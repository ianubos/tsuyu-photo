import React from "react";
import Link from "next/link";
import Hamburger from "./Hamburger"
import { categories, sitename } from '../../data/sitedata'
import { jsUcfirst } from "../../utils"

const NavItem = ({ slug, name }) => (
    <li className="text-base font-normal transition">
        <Link href={`/${slug}`}>
            <a className="h-full w-full py-2 px-2 hover:text-white text-gray-400 transition">{jsUcfirst(name)}</a>
        </Link>
    </li>
);

function Header() {
    return (
    <>
      <header className="w-full bg-darkest h-20 md:h-28 font-oswaldRegular box-border fixed z-50 bg-black">
        <div className="text-gray-300 flex justify-between items-center h-full w-full px-2 sm:px-10">
          <Link href="/">
              <a className="text-xl md:text-2xl font-normal">
                {sitename}
              </a>
          </Link>
          <ul className="text-xl md:text-2xl flex justify-between items-center">
              <div className='sm:flex hidden'>
                <NavItem slug={"gallery"} name={"all"} />
                {categories.map((cat, index) => (
                  <NavItem slug={`gallery/${cat.category}`} name={cat.category} key={index} />
                ))}
                <NavItem slug={"contact"} name={"contact"} />
              </div>
              <div className='block sm:hidden'>
                <Hamburger />
              </div>
          </ul>
        </div>
      </header>
      <div className="block h-20 w-full"></div>
    </>
    );
}

export default Header;
