import React from 'react'
import { Outlet} from 'react-router-dom'
import { RoutingLinks} from '../components/view-match'
import { ScoreBoard } from '../components/UI'
export default function ViewMatch() {
 const time = Date.now()
 
  return (
    <main className='relative'>
      <ScoreBoard scoreBoardData={{awayScore: 1, homeScore: 1}} showSeconds= {false} matchTime={time}/>
      <RoutingLinks/>
      <div className='min-h-[1px] bg-grey mt-4'></div>
      
      <section>
        <Outlet />
      </section>
    </main>
  )
}
