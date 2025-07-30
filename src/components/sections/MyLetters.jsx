import React from 'react'
import WordsCard from '../WordsCard'

function MyLetters() {
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="inline-block text-3xl font-bold text-purple-400 lg:text-4xl">
            To My Favorite Person
        </div>
        <span className='text-md font-medium text-center text-gray-600 mt-2 lg:text-xl'>Words I wish I say more often.</span>
        <div className="flex gap-2 mt-4 flex-wrap justify-center items-center">
            <WordsCard content="You're pretty! I wish you could see yourself the way I see you."/>
            <WordsCard content="Stop being so harsh on yourself! You’re doing better than you think."/>
            <WordsCard content="I love everything about you, even the parts you doubt."/>
            <WordsCard content="Thank you for always being there for me. I feel so lucky to have you in my life."/>
            <WordsCard content="You’re the best thing that ever happened to me. I hope you know that!" />
        </div>
    </div>
  )
}

export default MyLetters