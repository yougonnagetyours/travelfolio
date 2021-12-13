import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-10 mb-4 sm:mb-8">
      <div className="flex justify-between border-b w-full inline-block border-blue-400 py-3 sm:py-8">
        <div className="block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-2xl sm:text-4xl text-white">
              Travelfolio
            </span>
          </Link>
        </div>
        <div className="hidden sm:block sm:contents">          
              <div className='flex'>
                  <div className="relative mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">Blog
                    <div className="absolute z-50 -right-1/4 top-1/2 mt-4 mb-8  p-8 pb-12 bg-white text-black shadow-lg rounded-lg">
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
                  <span className="mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">About Me</span>  
              </div>    
        </div>
        <div className="sm:hidden bg-pink-600 w-10 h-10 p-2 rounded-lg">
          <div className="border-b-2 border-white h-1/3"></div>
          <div className="border-b-2 border-white h-1/3"></div>
          <div className="h-1/3"></div>
        </div>
      </div>
    </div>
  )
}

export default Header
