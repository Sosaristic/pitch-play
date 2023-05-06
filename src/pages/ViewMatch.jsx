import React from 'react'
import { Outlet} from 'react-router-dom'
import { RoutingLinks, ScoreBoard } from '../components/view-match'
export default function ViewMatch() {
 
 
  return (
    <main className='relative'>
      <ScoreBoard scoreBoardData={{awayScore: 1, homeScore: 1}}/>
      <RoutingLinks/>
      <div className='min-h-[1px] bg-grey mt-4'></div>
      
      <section>
        <Outlet />
      </section>
    </main>
  )
}
