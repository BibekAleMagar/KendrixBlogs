import React from 'react'
import { IoMailOpenOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <div className='flex w-full md:flex-row flex-col  md:px-20 px-3 bg-blue-500 py-4 md:py-6 lg:py-10 md:gap-10 lg:gap-6 text-white justify-between xl:gap-15'>
        <div className='flex flex-col md:w-2/4'>
           <p className='font-bold text-center md:text-start text-lg md:text-xl lg:text-2xl mb-2'>Thank you for reading!</p>
           <p className='text-justify '>
            
            I hope you enjoyed this post and found it helpful. Your support means a lot — stay tuned for more inspiring content! ✨
           </p>

        </div>
        <div className='md:w-1/4 '>
            <p className='font-bold text-center text-lg md:text-l lg:text-2xl mb-2'>Post Your Blog</p>
            <div className='flex flex-row justify-center items-center'>
              <a href='mailto:magarbibek71@gmail.com'><IoMailOpenOutline size={30} /></a>
              <p className='pl-2'>Click on icon</p>
            </div>
            <p>Plese mention <span className='font-bold'>title, description, image and author</span> while sending your blog</p>
        </div>
        <div className='md:w-1/4 '>
            <p className='font-bold text-center text-lg md:text-xl lg:text-2xl mb-2'>Connect With Me</p>
            <div className='flex justify-between'>
              <a href="https://www.linkedin.com/in/bibek-magar-7b0504255/" target='_blank'><FaLinkedin size={30}/></a>
              <a href='https://www.facebook.com/bibek.magar.849280' target='_blank'><BsFacebook  size={30} /></a>
               <a href='https://www.instagram.com/b__bek__/' target='_blank'><FaInstagramSquare  size={30} /></a>
                <a href='https://x.com/codekendrix' target='_blank'><FaSquareXTwitter  size={30} /></a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
