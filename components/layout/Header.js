import React, { useState, useEffect } from "react";
import Link from "next/link";
import Hamburger from "./Hamburger"
import { categories, sitename } from '../../data/sitedata'
import { jsUcfirst } from "../../utils"

const NavItem = ({ slug }) => (
    <li className="text-xl font-semibold transition">
        <Link
          href={`/${slug}`}
        >
            <a className="h-full w-full py-2 px-2 hover:text-white text-gray-400 transition">{jsUcfirst(slug)}</a>
        </Link>
    </li>
);

function Header() {
    return (
    <>
      <header className="w-full bg-darkest h-20 md:h-28 font-oswaldRegular box-border fixed z-50">
        <div className="text-gray-300 flex justify-between items-center h-full w-full px-2 sm:px-10">
          <Link href="/">
              <a className="text-xl md:text-2xl font-bold ">
                {sitename}
              </a>
          </Link>
          <ul className="text-xl md:text-2xl flex justify-between items-center">
              <div className='sm:block hidden'>
                {categories.map((cat, index) => (
                  <NavItem slug={cat.category} key={index} />
                ))}
                <NavItem slug={"contact"} />
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
