import React, { useState } from 'react'
import Logo from '../assets/Logo.svg'
import { FcMenu } from 'react-icons/fc';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {

  const [menu, setMenu] = useState(false);

  return (
    <div className='bg-[#f6fbff] p-5 lg:px-14'>
      <nav className='max-w-[1400px] mx-auto  flex items-center justify-between' >
        {/* Logo */}
        <div>
          <img src={Logo} alt="Logo" className='sm:w-25' />
        </div>

        {/* Navigation links */}
        <div className='hidden sm:flex'>
          <ul className='flex sm:gap-2 sm:text-[8px]  lg:gap-6 font-normal lg:text-[16px]
           leading-relaxed text-[#333333] tracking-[0.02em] justify-center items-center
           md:gap-5 md:text-[12px]'>
            <li><a>Home</a></li>
            <li><a>About us</a></li>
            <li><a>Services</a></li>
            <li><a>Newsroom</a></li>
            <li><a>Portfolio</a></li>
            <li><button className='flex flex-row justify-center items-center sm:w-20
              sm:h-8 lg:w-32 lg:h-14 border border-blue-400 rounded-lg hover:bg-blue-400
              hover:text-white duration-300 md:w-24 md:h-10'>
              Contact Us</button></li>
          </ul>
        </div>

        <button className='sm:hidden'
          onClick={() => { setMenu(!menu) }}
        ><FcMenu size={28} /></button>

        {/* Overlay for small devices */}
        {
          menu && <div className='bg-black/70 fixed w-full h-screen z-10 top-0 right-0'></div>
        }

        <div className={menu ? `fixed top-0 right-0 w-[200px] h-screen bg-[#f6fbff] z-10 duration-700`
          : `fixed top-0 right-[-100%] w-[200px] h-screen bg-[#f6fbff] z-10 duration-700`}>
          <AiOutlineClose size={20}
            onClick={() => { setMenu(!menu) }}
            className='absolute top-4 left-4 ' />

          <nav className='flex justify-center'>
            <ul className='pt-16 flex flex-col gap-8 font-normal leading-relaxed
             text-[#333333]'>
              <li><a>Home</a></li>
              <li><a>About us</a></li>
              <li><a>Services</a></li>
              <li><a>Newsroom</a></li>
              <li><a>Portfolio</a></li>
          <li><button className='mt-3  flex px-2 py-1 border-2 border-blue-400 
                rounded-lg text-[14px] hover:bg-blue-400 hover:text-white'>Contact Us</button></li>
            </ul>
          </nav>
        </div>
      </nav>
    </div>
  )
}

export default Navbar