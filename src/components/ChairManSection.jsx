import React from 'react'
import Chairman from '../assets/Chairman.svg'

const ChairManSection = () => {
    return (
        <div className='bg-[#f6fbff]'>
            <div className=' max-w-[1400px] mx-auto py-20'>
                <h1 className='font-medium md:text-5xl xl:text-6xl leading-120 text-center
                 text-3xl sm:text-4xl'>Our Chairman</h1>
                <div className='flex justify-center pt-16'>
                    <img src={Chairman} alt="" className='md:w-64 rounded-full lg:w-72 sm:w-56 w-44' />
                </div>
                <p className='font-lato  font-extrabold text-lg leading-130 text-center text-gray-700 pt-5'>Abid Junaid</p>

                <div className='text-center xl:px-48 py-6 lg:px-36 md:px-28 sm:px-20 px-12'>
                    <p className='font-lato font-normal text-base leading-150 tracking-tight text-gray-600'>Abid Junaid has over 30 years of experience in the Middle East and has established himself
                        as a true visionary in the region. He has led pioneer companies into market and transformed
                        them into industry leaders that are now recognized for their excellence in their respective sectors
                        of construction, contracting, facilities management, real estate development and food & beverages.
                        <br />
                        <br />
                        Most notably, he has developed and delivered over 30 million square feet of premium real estate and
                        has been instrumental in the development of several landmarks in the GCC region.</p>
                </div>

                <div className='xl:px-48 py-6 lg:px-36 md:px-28 sm:px-20 px-12'>
                    <h3 className='font-lato font-bold text-2xl leading-6 text-violet-'>
                        Key Achievements</h3>
                    <ul className='list-disc p-4 flex flex-col gap-3'>
                        <li>First to deliver a mixed use building in DIFC.</li>
                        <li>First to bring in a real estate company with ISO rating.</li>
                        <li>Won the MRM Award for the real estate development category</li>
                        <li>Previously led a real estate company which was awarded the coveted Super Brand award for 4 consecutive years</li>
                        <li>Developed and delivered the tallest residential building in the world upon completion in 2007</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ChairManSection