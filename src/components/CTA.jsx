import React from 'react'
import CTALogo from '../assets/CTA.svg'
const CTA = () => {
    return (
        <div className='bg-[#fff]'>
            <div className='max-w-[1400px] mx-auto md:py-40 md:px-[64px] relative py-6 px-5 '>
                <div className='bg-[#111857] flex rounded-lg  '>
                    <div className='flex flex-col md:px-10 md:py-20 gap-7 px-6 py-5 sm:px-16 sm:py-11 '>
                        <h1 className='font-bold lg:text-[48px] leading-tight text-white text-2xl'>
                            Schedule Free <br /> Consultation
                        </h1>
                        <p className='font-normal lg:text-base leading-relaxed tracking-tighter text-white text-sm'>
                            Speak to our real estate experts and benefit from <br />
                            personalised guidance tailored to your investment goals
                        </p>
                        <button className='flex flex-row justify-center items-center lg:p-4 lg:w-40 lg:h-14 bg-white
                         rounded-md w-32 h-14 font-semibold '
                        >Get in touch</button>
                    </div>

                    <div className=' hidden min-[1151px]:flex'>
                        <img src={CTALogo} alt="" className='absolute top-[20px] right-[64px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA