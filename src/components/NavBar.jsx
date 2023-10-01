import React , {useState, useEfect} from 'react'

import {FaBars,FaFacebookF}  from 'react-icons/fa'

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () =>
    {
        setNav(!nav)
    }
  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-900 '>
         <h1 className='p-2'>Port</h1>
      <ul className='hidden sm:flex px-4'>
       
        <li>
          <a href ="/">Home</a>
        </li>
        <li>
        <a href ="/">About us</a>
        </li>
        <li>
        <a href ="/">Updates</a>
        </li>
      </ul>
      {/* Hamburger icon anything above small it will be hidden */}
      <div onClick ={handleNav} className='sm:hidden z-10'>
        <FaBars size ={20} className ='mr-4 cursor-pointer'/>
      </div>

      {/* Mobile menu */}
      <div onClick ={handleNav} className={nav ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col': 'absolute top-0 h-screen left-[-100%] ease-in duration-300'}>
        <ul className='h-full w-full text-center pt-12'>
        <li className='text-2xl py-8'>
          <a href ="/">Home</a>
        </li>
        <li className='text-2xl py-8'>
        <a href ="#about-us">About us</a>
        </li>
        <li className='text-2xl py-8'>
        <a href ="#update">Updates</a>
        </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
