import Image from 'next/image'
import React from 'react'
import MarketPlaceImage from "../assets/images/MarketPlace.svg"

const MarketPlace = () => {
  return (
    <div className="flex flex-col md:flex-row mt-10 lg:mt-20 px-10 lg:px-20  justify-center  gap- lg:gap-16 text-white my-4">
      <div className="lg:w-5/12 w-10/12 mt-6 md:mt-0  md:mr-4 lg:mr-10 md:w-6/12 mx-auto md:mx-0 order-2 md:order-1">
        <div className="relative w-full">
          <Image src={MarketPlaceImage}/>
        </div>
      </div>
      <div className="lg:w-4/12 md:w-7/12 text-center md:text-left order-1 md:order-2">
        <h2 className="text-lg md:text-2xl lg:text-3xl font-medium font-tertiary text-center md:text-left mt-6 md:my-0">
        Browse through our massive NFT marketplace 
        </h2>

        <div className="mt-5 md:mt-2 lg:mt-7">
          <h3 className="text-lg font-medium">Mint Full Collections </h3>
          <p className="text-sm font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            vitae aliquam cursus sit amet, cum molestie viverra
          </p>
        </div>

        <div className="mt-5 md:mt-2 lg:mt-7">
          <h3 className="text-lg font-medium">Checkout Single NFT's</h3>
          <p className="text-sm font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            vitae aliquam cursus sit amet, cum molestie viverra
          </p>
        </div>
      </div>
    </div>
  )
}

export default MarketPlace