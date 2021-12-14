import React from 'react';
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="container mx-auto px-4 sm:px-10 mt-4 sm:mt-8">
      <div className="flex justify-between border-t w-full inline-block border-gray-900 pt-2 pb-4 sm:py-8">
        <AiOutlineInstagram className='text-white' />
      </div>
    </div>
  )
}

export default Footer