import React from 'react'

interface IProp {
    title: string,
    message: string
}

const BenefitItem:React.FC<IProp> = ({ title, message}) => {
  return (
    <div className='lg:w-3/12 md:w-4/12 font-secondary text-center'>
        <h3 className='text-primaryGreen font-medium text-sm md:text-base my-2'>
            { title }
        </h3>

        <h5 className=' text-xs text-gray-200 md:w-7/12 lg:w-full mx-auto'>
            {
                message
            }
        </h5>
    </div>
  )
}

export default BenefitItem