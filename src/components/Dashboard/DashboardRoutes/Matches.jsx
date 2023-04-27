import React from 'react'
import TeamsCard from '../../UI/TeamsCard'

export default function Matches() {
  return (
    <div>

      <div className='flex relative flex-wrap justify-evenly  gap-4 px-8 pb-20'>
      {Array.from({length:8}, (v, id)=>  <TeamsCard key={id}/>)}
      </div>
      <button className='create-btn-shadow fixed flex items-center justify-center text-[.8rem] lg:text-[1rem] font-[600]  bottom-[15%] right-[10%] lg:bottom-[10%] w-[3rem] h-[3rem] sm:w-[5rem] sm:h-[5rem]  rounded-full p-8 bg-primary'>Create <br /> Match</button>
      </div>
  )
}
