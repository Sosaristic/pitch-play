import React from 'react'
import {Link} from "react-router-dom"
import { useLocation, Navigate } from 'react-router-dom'

export default function Verification() {
  const {state} = useLocation()
  console.log(state);
  if(!state){
    return <Navigate to={"/sign-in"}/>
  }
  return (
    <div className="flex bg-white w-full flex-col justify-center items-center font-jost text-primary text- px-6">
    <p className='text-center'>An Email verification link has been sent to <span className='text-dark font-[500]'>{state} </span></p>
    <p>Verfy and sign in</p>
    <p className='text-center'>Thanks for signing up to Pitch Play</p>
    <p>
      Go to <Link to={"/sign-in"} className="underline">Login</Link>
    </p>
  </div>
  )
}
