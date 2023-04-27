import React from 'react'
import { IoMdShirt } from "react-icons/io";


export default function TeamsCard() {
  return (
    <div className='flex relative p-4 basis-full md:basis-[45%]  lg:basis-[30%] items-center justify-center teams-card text-white rounded-lg'>
        <div className='flex items-center w-2/5 flex-col flex-2'>
           <div className='text-[3rem] text-[red]'> <IoMdShirt /></div>
           <p> Ronaldo fans </p>
        </div>
        <div className='1/5 flex-1 text-center flex flex-col'><div>vs</div> <div className='text-[.6rem]'>4 Mar 2023</div></div>
        <div className='flex items-center w-2/5 flex-col text-center'>
           <div className='text-[3rem] flex-2'> <IoMdShirt /></div>
           <p> Messi fans </p>
        </div>
    </div>
  )
}
