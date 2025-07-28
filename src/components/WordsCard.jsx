import React from 'react'

function WordsCard(props) {
  return (
    <div className='bg-white rounded-md p-2 max-w-[300px]'>
        💗 {props.content}
    </div>
  )
}

export default WordsCard