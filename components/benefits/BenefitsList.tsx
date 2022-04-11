import React from 'react'
import BenefitItem from './BenefitItem'

const BenefitsList = () => {
    const benefits = [
        {
            title: "Branded Storefront",
            message: "Sell NFT's with your own custom URL and branded Storefront"
        },
        {
            title: "No Code Via Partners",
            message: "Don't have developers? No problem! Launch your own NFT collection with our partners without writing a single line of code"
        },
        {
            title: "Multi-file Format",
            message: "nameless™ supports video, images, audio and even 3D file types"
        }
    ]
  return (
    <div className='py-5 lg:py-8 px-5 md:px-10 lg:px-20 flex flex-col md:flex-wrap md:flex-row lg:w-9/12 lg:mx-auto justify-between'>
        {
            benefits.map((benefit, index)=>(
                <BenefitItem key={index} title={benefit.title} message={benefit.message} />
            ))
        }
    </div>
  )
}

export default BenefitsList