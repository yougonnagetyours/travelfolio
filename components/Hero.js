import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="p-0 lg:p-8 pt-32 pb-32">
        <h1 className="text-center sm:text-left mb-8 text-3xl md:text-4xl font-semibold">
            Welcome to My Blog
        </h1>
        <div className="text-center sm:text-left mb-8 text-sm md:text-lg font-semibold">
            I love traveling and I want to share with you my little bit experience in it.
        </div>
        <div className="text-center sm:text-left">
            <Link href='#blog'>
                <span className="w-full sm:w-auto opacity-90 transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-lg sm:rounded-full text-white px-8 py-1 sm:py-3 cursor-pointer">See the blog</span> 
            </Link>
     </div>     
    </div>
  )
}

export default Hero
