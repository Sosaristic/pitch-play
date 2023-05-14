import React from 'react'
import { PlayerCard } from '../../UI/PitchView'
import { MdOutlineModeEdit, MdOutlineDelete } from 'react-icons/md'

const PlayerNum = ()=>{
  return <div className='h-[1.8rem] relative   w-[1.8rem] md:h-[2.5rem] md:w-[2.5rem] rounded-full bg-black text-white flex items-center justify-center font-[600 capitalize] z-20'>
2
  </div>
}

export default function SquadList() {
  return (
    <div>
      <h2 className='w-fit bg-primary p-2 rounded-bl-xl rounded-br-xl font-bold mt-4'>Manage Team Players</h2>
      <div>
        <div className='flex items-center text-[1.2rem]'>
         <div className='flex-1'><PlayerNum /></div>
         <p className='flex-[3]'>Varane</p>
         <p className='flex-1'>DEF</p>
         <div className='flex-1'>
          <button type='button' className=''><MdOutlineModeEdit /></button>
          <button type='button' className=''><MdOutlineDelete /></button>


         </div>
         <div>

         </div>
        </div>
      </div>
    </div>
  )
}
