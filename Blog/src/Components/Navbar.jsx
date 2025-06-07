
import React from 'react'
import { GiElephant } from "react-icons/gi";
import hero from '../assets/Stay Updated With Kendrix.png'

const Navbar = ({query,setQuery}) => {


  return (
    <>
    <div className='flex flex-row md:px-5 px-2 bg-blue-500 justify-between '>
        <div>
            <a href='/'><GiElephant  size={50} color='white' /></a>
        </div>
        <div className='flex items-center justify-center'>
            <input type="text" placeholder='Search blogs'
            value = {query} 
            onChange={(e)=>setQuery(e.target.value)}
            className='bg-white w-full md:w-75 rounded-lg border-1 border-black '/>
        </div>
        <div className='items-center hidden md:flex'>
          <h1 className='font-bold md:text-lg text-white'>KENDRIX BLOGS</h1>
        </div>
    </div>
    <div className='bg-blue-500 flex justify-center items-center py-5 font-bold text-white text-2xl md:text-4xl lg:text-6xl'>
      <p>Stay Updated With Kendrix</p>
    </div>
    </>
  )
}

export default Navbar
