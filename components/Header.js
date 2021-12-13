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
      <div className="border-b w-full inline-block border-blue-400 py-2 sm:py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-2xl sm:text-4xl text-white">
              Travelfolio
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          <div>
            <div className="relative">
              <div className='absolute top-0 right-0'>
                <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">Blog</span>
                <div className="absolute left-0 bg-white shadow-lg rounded-lg">
                  {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                      <span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                        {category.name}
                      </span>
                    </Link>
                  ))}
                </div>  
              </div>  
            </div>  
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Header
