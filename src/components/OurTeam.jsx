import React from 'react'
import Ellipse1 from '../assets/Ellipse1.svg'
import Ellipse2 from '../assets/Ellipse2.svg'
import Ellipse3 from '../assets/Ellipse3.svg'
import Ellipse4 from '../assets/Ellipse4.svg'
import { FaFacebook, FaLinkedin, FaInstagramSquare } from 'react-icons/fa'

const OurTeam = () => {
    return (
        <div className='bg-[#F6FBFF]'>
            <div className=' max-w-[1400px] mx-auto py-20 '>
                <h1 className='font-normal sm:text-[48px] text-[38px] leading-[120%]  text-center text-grey-700'>
                    Meet Our Team
                </h1>

                <p className='font-normal text-base leading-relaxed text-center tracking-tighter text-grey-600 pt-6'>Meet our team of specialists with decades of combined experience</p>

                <div className='lg:flex lg:flex-row xl:p-16 p-4 justify-between sm:grid sm:grid-cols-2 sm:p-32 sm:gap-5
                   flex flex-col gap-8 px-11 pt-10'>

                    <div className='bg-white rounded-xl shadow-xl hover:shadow-2xl hover:border-t-8 duration-200 hover:border-blue-400'>
                        <div className='xl:px-10 xl:py-8 lg:px-4 lg:py-3 sm:py-5 sm:px-5 py-5  px-5 flex justify-center'>
                            <img src={Ellipse1} alt="" />
                        </div>
                        <div className='flex flex-row p-7 justify-between '>
                            <div>
                                <p className='font-semibold text-lg leading-relaxed flex items-center text-center tracking-wider text-grey-700'
                                >Devon Lane</p>
                                <span className='font-normal text-sm leading-relaxed flex items-center text-center text-grey-500'>Devon Lane</span>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <FaFacebook className='cursor-pointer' />
                                <FaLinkedin className='cursor-pointer' />
                                <FaInstagramSquare className='cursor-pointer' />
                            </div>
                        </div>
                    </div>

                    <div className='bg-white rounded-xl  shadow-xl hover:shadow-2xl hover:border-t-8 duration-200 hover:border-blue-400'>
                        <div className='xl:px-10 xl:py-8 lg:px-4 lg:py-3 sm:py-5 sm:px-5 py-5  px-5 flex justify-center'>
                            <img src={Ellipse2} alt="" />
                        </div>
                        <div className='flex flex-row p-7 justify-between '>
                            <div>
                                <p className='font-semibold text-lg leading-relaxed flex items-center text-center tracking-wider text-grey-700'
                                >Devon Lane</p>
                                <span className='font-normal text-sm leading-relaxed flex items-center text-center text-grey-500'>Devon Lane</span>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <FaFacebook className='cursor-pointer' />
                                <FaLinkedin className='cursor-pointer' />
                                <FaInstagramSquare className='cursor-pointer' />
                            </div>
                        </div>
                    </div>

                    <div className='bg-white rounded-xl shadow-xl hover:shadow-2xl hover:border-t-8 duration-200 hover:border-blue-400'>
                        <div className='xl:px-10 xl:py-8 lg:px-4 lg:py-3 sm:py-5 sm:px-5 py-5  px-5 flex justify-center'>
                            <img src={Ellipse3} alt="" className='lg:w-48' />
                        </div>
                        <div className='flex flex-row p-7 justify-between '>
                            <div>
                                <p className='font-semibold text-lg leading-relaxed flex items-center text-center tracking-wider text-grey-700'
                                >Devon Lane</p>
                                <span className='font-normal text-sm leading-relaxed flex items-center text-center text-grey-500'>Devon Lane</span>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <FaFacebook className='cursor-pointer' />
                                <FaLinkedin className='cursor-pointer' />
                                <FaInstagramSquare className='cursor-pointer' />
                            </div>
                        </div>
                    </div>

                    <div className='bg-white rounded-xl shadow-xl hover:shadow-2xl hover:border-t-8 duration-200 hover:border-blue-400'>
                        <div className='xl:px-10 xl:py-8 lg:px-4 lg:py-3 sm:py-5 sm:px-5 py-5  px-5 flex justify-center'>
                            <img src={Ellipse4} alt="" />
                        </div>
                        <div className='flex flex-row p-7 justify-between '>
                            <div>
                                <p className='font-semibold text-lg leading-relaxed flex items-center text-center tracking-wider text-grey-700'
                                >Devon Lane</p>
                                <span className='font-normal text-sm leading-relaxed flex items-center text-center text-grey-500'>Devon Lane</span>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <FaFacebook className='cursor-pointer' />
                                <FaLinkedin className='cursor-pointer' />
                                <FaInstagramSquare className='cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center pt-7'>
                    <button className='items-center font-sen font-bold text-base leading-relaxed text-gray-700
                    border-2 border-gray-700 px-5 py-4 rounded-lg hover:text-white hover:bg-gray-700 duration-300'>See All Team</button>
                </div>
            </div>
        </div>
    )
}

export default OurTeam

// flex flex-col justify-center items-center py-28