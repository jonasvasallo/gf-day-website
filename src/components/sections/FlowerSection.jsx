import React from 'react'

function FlowerSection() {
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="text-3xl md:text-5xl font-LTColoredPencil text-center">
            Flowers for my pretty girl!
        </div>
        <span className='text-md lg:text-lg font-medium text-center text-gray-600 mt-2'>I know carnations are your favorite.</span>
        <div className='w-[70%] p-4 lg:w-[300px] animate-[bounce_2s_ease-in-out_infinite]'>
            <img src="/pictures/carnation_2.png" alt="" className='w-full h-full object-contain'/>
        </div>
    </div>
  )
}

export default FlowerSection