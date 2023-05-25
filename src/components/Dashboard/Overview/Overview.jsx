import React from 'react'
import {DHero} from ".."
import TeamFormCard from './TeamFormCard'
import GamesPlayedStat from './GamesPlayedStat'

export default function Overview() {
  return (
    <main className='px-2 lg:px-8 pb-[10rem]'>
        <section>
          <h2 className='text-[1.8rem] lg:text-[2.5rem] font-[600] font-poppins'>Dashboard</h2>
          <p className='text-secondary-text font-jost font-[600]'>Welcome back, Anderson</p>
        </section>
        <section className='flex flex-col md:flex-row mt-4 gap-2'>
        <TeamFormCard />
        <GamesPlayedStat />
        </section>
    </main>
  )
}
