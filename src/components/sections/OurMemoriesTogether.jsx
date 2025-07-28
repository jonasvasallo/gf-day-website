import React from 'react'
import MemoriesCard from '../MemoriesCard'

function OurMemoriesTogether() {
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="inline-block text-5xl font-LTColoredPencil">
            Our Memories Together 💜
        </div>
        <div className="flex gap-2 mt-4">
            <MemoriesCard path="IMG_8089.jpeg"/>
            <MemoriesCard path="IMG_7705.jpg"/>
            <MemoriesCard path="IMG_7960.jpeg"/>
            <MemoriesCard path="cover.JPG"/>
            <MemoriesCard path="IMG_7711.jpg"/>
            <MemoriesCard path="IMG_8307.jpeg"/>
        </div>
    </div>
  )
}

export default OurMemoriesTogether