import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { HiOutlineMenuAlt4 } from "react-icons/hi"

const Header = ({ activeMenu, menuClick, activeSubMenu, subMenuClick, menuClickFalse }) => {
  const [categories, setCategories] = useState([]);
  
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
      <div className="flex justify-between border-b w-full border-gray-900 pt-4 pb-2 sm:py-8">
        <div className="flex sm:block items-center">
          <Link href="/">
            <span className="cursor-pointer font-bold text-2xl sm:text-4xl text-white sm:text-gray-900">
              Travelfolio
            </span>
          </Link>
        </div>
        <div className="hidden sm:block">          
              <div className='flex'>
                  <div className="relative mt-2 align-middle text-white sm:text-gray-900 ml-4 font-semibold cursor-pointer" onClick={menuClick}>Blog
                    <div className={classNames(activeMenu ? "block" : "hidden", "absolute z-50 -right-1/4 top-1/2 mt-4 p-8 pb-8 bg-white sm:text-gray-900 shadow-lg rounded-lg")}>
                      {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                          <span className="mt-2 align-middle font-semibold cursor-pointer">
                            {category.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>   
                  <span className="mt-2 align-middle text-white sm:text-gray-900 ml-4 font-semibold cursor-pointer">Contact</span>  
                  <span className="mt-2 align-middle text-white sm:text-gray-900 ml-4 font-semibold cursor-pointer">
                    <Link href="/about">About Me</Link>
                  </span>  
              </div>    
        </div>
        <div 
          className={classNames(activeMenu ? "opacity-100 bg-black" : "opacity-90 bg-pink-600", "hamburger-menu sm:hidden w-10 h-10 p-2 rounded-lg shadow-lg")}
          onClick={menuClick}
        >
          <div className="flex align justify-center items-center text-white">
            {activeMenu ? <AiOutlineClose size="1.5rem" /> : <HiOutlineMenuAlt4 size="1.5rem" />}
          </div>
        </div>
      </div>
      <div className={classNames(activeMenu ? "block" : "hidden", "sm:hidden relative")}>
        <div className="absolute z-50 right-0 -top-1 bg-white shadow-2xl rounded-lg w-10/12">
          <div className="flex justify-center mt-12 text-center align-middle font-semibold cursor-pointer" onClick={subMenuClick}>
            Blog 
            <div className="flex items-center">
              {activeSubMenu ? <MdKeyboardArrowUp size="1rem" /> : <MdKeyboardArrowDown size="1rem" />}
            </div>  
          </div>
          <div className={classNames(activeSubMenu ? "block" : "hidden" ,"mt-6 text-center align-middle cursor-pointer")}>
            {categories.map((category) => (
              <div onClick={menuClickFalse}>
                <Link key={category.slug} href={`/category/${category.slug}`}>
                  <span className="mt-2 align-middle cursor-pointer">
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
