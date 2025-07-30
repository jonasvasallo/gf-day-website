import React from 'react'

function MemoriesCard(props) {
  return (
    <div className="w-[150px] h-[175px] bg-white p-2 lg:w-[300px] lg:h-[350px]">
        <div className="w-full h-[85%]">
            <img src={`/pictures/${props.path}`} alt="" className='w-full h-full object-cover'/>
        </div>
    </div>
  )
}

export default MemoriesCard