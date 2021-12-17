import React from 'react';
import Image from 'next/image';

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
      <div className="absolute left-0 right-0 -top-14">
        <img
          //unoptimized
          alt={author.name}
          height="80px"
          width="80px"
          className="align-middle cover rounded-full mx-auto"
          src={author.photo.url}
        />
      </div>
      <h3 className="text-white mt-8 mb-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-ls">{author.bio}</p>
    </div>
  )
}

export default Author
