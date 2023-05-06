import React from 'react'
import {useLocation} from "react-router-dom"

export default function DashboardHeader() {
  const {pathname} = useLocation()
  if(pathname === "/dashboard/overview"){
  return (
    <header className='bg-[black] pt-4 pl-4'>
<h1 className='text-[1.2rem] font-jost '>Hi Anderson</h1>
<h2 className='text-[2rem] mt-4'>Welcome Back</h2>
    </header>
  )
  }
}
