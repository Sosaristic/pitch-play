import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function MatchRoute() {
    const {pathname} = useNavigate()
   
  return (
    <div>
        <Outlet />
    </div>
  )
}