import React from 'react';
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";

import moment from 'moment'

const Footer = () => {
  return (
    <div className="container mx-auto px-4 sm:px-10 mt-4 sm:mt-8">
      <div className='text-center'>Made by Yougonnagetyours</div>  
      <div className="flex justify-center border-t w-full border-gray-900 pt-2 pb-4 sm:py-8">
        <div>
            <a href="">
                <AiOutlineInstagram  size='2rem' />
            </a>  
        </div>
        <div>
            <a href="">
                <AiOutlineGithub  size='2rem' />
            </a>  
        </div>        
      </div>
    </div>
  )
}

export default Footer