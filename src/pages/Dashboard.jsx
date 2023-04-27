import React from 'react'
import { BottomNav, DashboardHeader, MainSideNav } from '../components/Dashboard'
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <main className='flex relative min-h-full'>
        <div className="side-bar hidden lg:block w-[15%] min-h-[100vh]"><MainSideNav /></div>
        <div className="w-[70%] bg-grey flex-1">
          <DashboardHeader />
          <Outlet/>
        </div>
        <div className='fixed bottom-0 left-0 right-0 lg:hidden'><BottomNav /></div>
    </main>
  )
}
