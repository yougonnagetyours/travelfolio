import React from 'react'

const PostCard = () => {
  return (
    <div className="p-0 lg:p-8 mt-32 mb-20">
        <h1 className="text-center sm:text-left mb-8 text-3xl font-semibold">
            About Me
        </h1>
        <div className="text-center sm:text-left mb-8 text-sm font-semibold">
            I love traveling and I want to share with you my little bit experience in it.
        </div>
        <div className="text-center sm:text-left">
            <Link href='#blog'>
                <span className="w-full sm:w-auto opacity-80 transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-lg sm:rounded-full text-white px-8 py-1 sm:py-3 cursor-pointer">Go to the blog</span> 
            </Link>
        </div>     
    </div>
  )
}

export default PostCard
