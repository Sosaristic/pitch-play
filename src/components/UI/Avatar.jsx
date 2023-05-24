import React from 'react'
import AvatarImg from "../../assets/svg/avatar.svg"

export default function Avatar() {
  return (
    <div className='rounded-full bg-light-grey'>
        <img src={AvatarImg} alt="" className='rounded-full h-[2rem] w-[2rem]'/>
    </div>
  )
}
