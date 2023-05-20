import React from 'react'
import FooterLogo from '../assets/Logo.svg';
import { FaLinkedin, FaInstagramSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-[#111111]'>
      <div className='max-w-[1400px] mx-auto px-10 py-10 flex flex-col gap-10 md:flex-row'>
        <div className='flex flex-col gap-4 md:w-1/2'>
          <img src={FooterLogo} alt="logo" className='w-1/2' />
          <p className='text-white font-light text-[11px] leading-relaxed tracking-tighter'>Join our newsletter to stay up to date on features and releases.</p>
          <div className='flex gap-4'>
            <input type="email" placeholder='Enter your email' className='px-2 py-2 outline-none rounded-lg text-xs font-semibold w-36 sm:w-52' />
            <button className='bg-blue-400 text-white text-xs px-3 py-1 rounded-lg sm:px-4'>Subscribe</button>
          </div>
          <p className='text-white font-light text-[11px] leading-relaxed tracking-tighter'>By subscribing you agree to with our Privacy Policy and provide consent to <br className='hidden md:flex' />
            receive updates from our company.</p>
        </div>

        <div className='flex justify-between text-white md:w-1/2 md:pt-9'>
          <div className='flex flex-col gap-4'>
        <p className='p-1 md:p-0 text-sm md:text-[18px]'>Information</p>
            <ul className='text-[#dadada] flex flex-col gap-2 text-[11px] md:text-[14px] '>
              <li className='hover:text-white duration-150' ><a>Dubai</a></li>
              <li className='hover:text-white duration-150'><a>+91XXXXXXXXXXX</a></li>
              <li className='hover:text-white duration-150'><a>xxxx@gmail.com</a></li>
            </ul>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='p-1 md:p-0 text-sm md:text-[18px]'>Pages</p>
            <ul className='text-[#dadada] flex flex-col gap-2 text-[11px] md:text-[14px]'>
              <li className='hover:text-white duration-150'><a>Home</a></li>
              <li className='hover:text-white duration-150'><a>About Us</a></li>
              <li className='hover:text-white duration-150'><a>Services</a></li>
              <li className='hover:text-white duration-150'><a>Portfolio</a></li>
              <li className='hover:text-white duration-150'><a>Blog</a></li>
            </ul>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='p-1 md:p-0 text-sm md:text-[18px]'>Follow Us</p>
            <ul className='text-[#dadada] flex flex-col gap-2 text-[11px] md:text-[14px]'>
              <li className='flex gap-2 items-center hover:text-white duration-150'><FaInstagramSquare /> Instagram</li>
              <li className='flex gap-2 items-center hover:text-white duration-150'><FaLinkedin /> Linkedin </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='max-w-[1400px] mx-auto py-5 px-10 flex justify-between items-center border-t-2 border-white'>
        <p className='font-medium sm:text-xs text-[8px] leading-relaxed text-white'>© 2023 All rights reserved.</p>
        <div className='flex flex-row font-normal sm:text-xs text-[6px] leading-relaxed text-white md:gap-7 gap-2 items-center'>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies Settings</p>
        </div>
      </div>


    </div>
  )
}

export default Footer