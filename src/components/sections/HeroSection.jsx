import React from 'react'
import SpotifyCard from '../SpotifyCard'

function HeroSection() {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
            <span className="text-5xl font-medium font-LTColoredPencil lg:text-6xl">Happy Girlfriend's Day! </span>
            <span className='text-md font-medium text-center text-gray-600 lg:text-xl'>To the one who makes my world brighter every day.</span>
        </div>
        <div className='w-[300px] h-[300px] mt-8 motion-preset-confetti '>
            <img src="/pictures/IMG_8426.PNG" alt="" className="w-full h-full object-cover rounded-md shadow-md"/>
        </div>
        <SpotifyCard/>
    </div>
  )
}

export default HeroSection