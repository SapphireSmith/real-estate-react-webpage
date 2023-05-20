import React from 'react'
import Fill from '../assets/fill.svg'
import FillHero from '../assets/fillhero.svg'

const Hero = () => {
  return (
    <div className='bg-[#f6fbff] '>
      <div className=' max-w-[1400px] mx-auto py-16 sm:py-20'>
        <div className='flex flex-col sm:flex-row justify-between w-full relative px-6 '>
          <div className='sm:w-1/2  mx-3'>
            <img src={Fill} alt="" className='p-1 md:p-4 xl:p-3 ' />
            {/* <img src={FillHero} alt="hero-image" className='pl-2 absolute 
              xl:top-[-60px] xl:left-[-46px] top-[-32px] left-[60px]  px-32  ' /> */}
              <img src={FillHero} alt="" className='absolute top-[-22px] left-[1px]  px-2
                min-[407px]:top-[-38px] min-[407px]:left-[-15px] sm:w-1/2 sm:left-[10px] sm:top-[-17px] min-[770px]:left-[18px]
                min-[770px]:top-[-12px] min-[866px]:top-[-15px] min-[866px]:left-[16px] min-[1047px]:left-[8px]
                xl:top-[-34px] xl:left-[-13px] ' />
          </div>

          <div className='sm:w-1/2 lg:px-16 w-full pt-6   '>
            <h1 className='font-medium xl:text-[48px] leading-[120%] sm:text-2xl 
         md:text-3xl min-[1240px]:text-4xl'>About us</h1>
            <div>
              <p className='font-lato font-normal  mt-8 sm:text-[7px]
               sm:mt-2 md:text-[9px] min-[880px]:text-[12px] max-[1028px]:text-[12px] min-[1240px]:text-[16px] min-[1240px]:mt-11'>
                We are a leading real estate firm based in Dubai, committed to providing expert guidance and personalised solutions for investors and developers.
                <br />
                <br />
                With over 3 decades of local industry experience across construction and real estate, and a dedicated team of accomplished professionals, we help
                clients navigate the complexities of real estate development in UAE, achieve their goals, and maximize their returns
                <br />
                <br />
                We are part of a larger diversified multi national group
                Network and partners
                Reinforce that we understand every aspect of real estate development (site selection, feasibility)
              </p>
              <br />
              <ul className='list-disc p-4 sm:text-[7px] sm:p-1  md:text-[8px] min-[880px]:text-[12px]
               max-[1028px]:text-[11px] min-[1240px]:text-[16px] '>
                <li>We are part of a larger diversified multi national group</li>
                <li>Network and partners</li>
                <li>Reinforce that we understand every aspect of real estate
                  development (site selection, feasibility)</li>
              </ul>
            </div>

            <div className='btn py-14 sm:py-2 md:py-4 flex flex-row gap-6'>
              <button className="flex flex-row justify-center items-center px-6 py-4 gap-2  bg-blue-400 border border-blue-400
               font-lato font-semibold text-base leading-6 tracking-wide text-white rounded-md hover:bg-blue-600 duration-300
                sm:text-[7px] sm:leading-3 sm:px-2 sm:py-2 md:py-3 md:text-[10px] min-[1240px]:text-xl">
                Schedule Free Consultation
              </button>
              <button className='bg-transparent border border-blue-400 text-black font-normal
               px-4 py-2 rounded-md leading-6 tracking-wide hover:bg-blue-400 hover:text-white
               duration-300  sm:text-[7px] sm:leading-3 sm:px-2 sm:py-2  md:py-3 md:text-[10px] 
               min-[1240px]:text-xl'>Explore Service</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero