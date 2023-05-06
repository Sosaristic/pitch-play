import React from 'react'
import FootballField from "../../assets/svg/football-field.svg"
export default function PitchView() {
  return (
    <div className={`relative h-[35rem] bg-football-field bg-no-repeat bg-center`} onClick={(e)=>console.log(e)}>
        {/* <img src={FootballField} alt="" className='absolute max-h-[100%] max-w-[100%] left-[50%] translate-x-[-50%]'/> */}
        <div className='relative top-[50%] left-[20%]'>1</div>
    </div>
  )
}
