import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="p-0 lg:p-8 my-40">
        <h1 className="transition duration-700 text-center sm:text-left mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
            Welcome to My Blog
        </h1>
        <div className="text-center sm:text-left">
            <Link href=''>
                <span className="w-full sm:w-auto transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-lg sm:rounded-full text-white px-8 py-1 sm:py-3 cursor-pointer">See the blog</span> 
            </Link>
     </div>     
    </div>
  )
}

export default Hero
