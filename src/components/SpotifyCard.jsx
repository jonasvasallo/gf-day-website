import React from 'react'

function SpotifyCard() {
  return (
    <div className='w-[400px] h-[112px] mt-4 bg-purple-300 rounded-md p-2'>
        <div className='flex gap-2 justify-between'>
            <div className='w-24 h-24 bg-gray-400'>
                <img src="/pictures/cover.JPG" alt="" className='w-full h-full object-cover'/>
            </div>
            <div className='flex-1/2 flex flex-col justify-between'>
                <div>
                    <span className='text-white font-semibold'>i love you • kyra</span>
                </div>
                <div>
                    <span className='text-white text-md font-medium'>Heaven • Clairo</span>
                    <div>
                        controls here
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-between items-end'>
                <div className='w-8 h-8'>
                    <img src="/assets/spotify-logo.png" alt="" className='object-cover'/>
                </div>

                <div className='w-9 h-9 bg-white rounded-full'></div>
            </div>
        </div>
    </div>
  )
}

export default SpotifyCard