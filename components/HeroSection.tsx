import Image from 'next/image'
import React from 'react'
import Hero from "../assets/images/hero.svg"

const HeroSection = () => {
  return (
    <section className='flex flex-col px-5 md:px-10 lg:px-20 py-5 w-full lg:py-10  text-white items-center'>
        <div className='w-11/12 lg:w-10/12 lg:mb-3'>
            <h2 className='font-semibold text-center text-xl md:text-3xl lg:text-6xl'>
                Reciprocal Interchange, Mutual Trading
            </h2>
            <p className='text-center  text-sm md:text-base w-11/12 md:w-9/12 lg:w-7/12 mx-auto my-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi mattis ut augue arcu, dui lacinia tempor, tristique morbi. Nunc velit 
            </p>
            <button className='bg-primaryGreen py-2 lg:py-3 px-5 rounded mx-auto block'>
                Get a Quote
            </button>
        </div>
        <div className='w-full image-container' >
            <div className='relative w-full h-full'>
                <Image src={Hero} layout={"fill"}/>
            </div>
        </div>
    </section>
  )
}

export default HeroSection