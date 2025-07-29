import React from 'react'

function LoveLetterSection() {
  return (
    <div className="flex flex-col justify-center items-center px-4">
        <div className="inline-block text-4xl font-bold text-purple-400">
            Love Letter
        </div>
        <span className='text-xl font-medium text-center text-gray-600 mt-2'>Words I wish I say more often.</span>
        <div className="bg-white rounded-md w-full md:w-[600px] h-[600px] p-4 flex flex-col gap-1 mx-4">
          <span>To my dear girlfriend,</span>
          <br />
          <span>Happy girlfriend's day!</span>
          <br />
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, velit animi? Expedita molestiae, aliquam consequatur tenetur ipsa fugit. Veritatis dignissimos iure dolor distinctio debitis voluptatibus repellendus amet ea illo quas.</span>
          <br />
          <span>Here’s to many more adventures, sweet moments, and memories together. 💖</span>
          <br />
          <span>Love,</span>
          <br />
          <span>Your bf </span>
        </div>
    </div>
  )
}

export default LoveLetterSection