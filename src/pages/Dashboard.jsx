import React from 'react'
import { BottomNav, DashboardHeader, MainSideNav } from '../components/Dashboard'
import { Outlet } from 'react-router-dom'
import { MyTeamDataProvider } from '../context/MyTeamData'
import { NewTeamDataProvider } from '../context/CreateTeamData'
import MobileHeader from '../components/Layout/MobileHeader'

export default function Dashboard() {
  return (
    <MyTeamDataProvider>
      <NewTeamDataProvider>
    <main className='flex relative min-h-full'>
        <div className="side-bar hidden lg:block w-[15%] min-h-[100vh]"><MainSideNav /></div>
        <div className="w-[70%] min-h-full bg-grey flex-1">

          <MobileHeader />
          <Outlet/>
        </div>
        <div className='fixed bottom-0 left-0 right-0 lg:hidden z-[100]'><BottomNav /></div>
    </main>
    </NewTeamDataProvider>
    </MyTeamDataProvider>
  )
}
