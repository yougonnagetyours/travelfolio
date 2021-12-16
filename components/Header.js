import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";

const Header = ({ activeMenu, menuClick, menuClickFalse }) => {
  const [categories, setCategories] = useState([]);
  const [activeSubMenu, setActiveSubMenu] = useState(false);

  const subMenuClick = () => {
    setActiveSubMenu(!activeSubMenu)
  }

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className="container mx-auto px-4 sm:px-10 mb-4 sm:mb-8">
      <div className="flex justify-between border-b w-full inline-block border-gray-900 pt-4 pb-2 sm:py-8">
        <div className="flex sm:block items-center">
          <Link href="/">
            <span className="cursor-pointer font-bold text-2xl sm:text-4xl text-white">
              Travelfolio
            </span>
          </Link>
        </div>
        <div className="hidden sm:block sm:contents">          
              <div className='flex'>
                  <div className="relative mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">Blog
                    <div className="absolute z-50 -right-1/4 top-1/2 mt-4 p-8 pb-8 bg-white text-black shadow-lg rounded-lg">
                      {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                          <span className="mt-2 align-middle font-semibold cursor-pointer">
                            {category.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>   
                  <span className="mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">Contact</span>  
                  <span className="mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                    <Link href="/about">About Me</Link>
                  </span>  
              </div>    
        </div>
        <div 
          className={classNames(activeMenu ? "opacity-100 bg-black" : "opacity-90 bg-pink-600", "hamburger-menu sm:hidden w-10 h-10 p-2 rounded-lg shadow-lg")}
          onClick={menuClick}
        >
          <div className={classNames(activeMenu ? "rotate-45" : "rotate-0", "border-b-2 border-white h-1/3")}></div>
          <div className={classNames(activeMenu ? "-rotate-45" : "rotate-0", "border-b-2 border-white h-1/3")}></div>
          <div className="h-1/3"></div>
        </div>
      </div>
      <div className={classNames(activeMenu ? "block" : "hidden", "sm:hidden relative")}>
        <div className="absolute z-50 right-0 -top-1 bg-white shadow-2xl rounded-lg w-10/12">
          <div className="mt-12 text-center align-middle font-semibold cursor-pointer" onClick={subMenuClick}>Blog</div>
          <div className={classNames(activeSubMenu ? "block" : "hidden" ,"mt-6 text-center align-middle cursor-pointer")}>
            {categories.map((category) => (
              <div onClick={menuClickFalse}>
                <Link key={category.slug} href={`/category/${category.slug}`}>
                  <span className="mt-2 align-middle font-semibold cursor-pointer">
                    {category.name}
                  </span>
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center align-middle font-semibold cursor-pointer" onClick={menuClickFalse}>Contact</div>
          <div className="mt-12 text-center align-middle font-semibold cursor-pointer" onClick={menuClickFalse}>
            <Link href="/about">
              About Me
            </Link>  
          </div>
          <div className="px-4">
            <div className="flex justify-center border-t mt-12 w-full border-gray-900 pt-4 pb-4">
              <div className='mr-4 transition duration-500 transform hover:-translate-y-1'>
                  <a href="https://www.instagram.com/yougonnagetyours/?hl=en">
                      <AiOutlineInstagram  size='2rem' />
                  </a>  
              </div>
              <div className="transition duration-500 transform hover:-translate-y-1">
                  <a href="https://github.com/yougonnagetyours/travelfolio">
                      <AiOutlineGithub  size='2rem' />
                  </a>  
              </div>        
            </div>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Header
