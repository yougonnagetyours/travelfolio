import React from 'react';
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="container mx-auto px-4 sm:px-10 mb-4 sm:mb-8">
      <div className="flex justify-between border-b w-full inline-block border-blue-400 pt-4 pb-2 sm:py-8">
        <AiOutlineInstagram />
      </div>
    </div>
  )
}

export default Footer