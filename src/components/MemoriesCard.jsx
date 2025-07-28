import React from 'react'

function MemoriesCard(props) {
  return (
    <div className="w-[300px] h-[350px] bg-white p-2">
        <div className="w-full h-[85%]">
            <img src={`/pictures/${props.path}`} alt="" className='w-full h-full object-cover'/>
        </div>
    </div>
  )
}

export default MemoriesCard