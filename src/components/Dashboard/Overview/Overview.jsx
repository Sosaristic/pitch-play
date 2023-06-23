import React from 'react'
import TeamFormCard from './TeamFormCard'
import GamesPlayedStat from './GamesPlayedStat'
import TeamGoalsStat from './TeamGoalsStat'
import ResultsCard from './ResultsCard'
import FixturesCard from './FixturesCard'
import { useAppContext } from '../../../context/AppContext'
import { UserHasNoTeam } from '../../UI'

export default function Overview() {
const {userHasTeam} = useAppContext()
console.log(userHasTeam);
if(!userHasTeam){
  return <div className=''>
   <UserHasNoTeam />
  </div>
}

  return (
    <main className='px-2 lg:px-8 pb-[4rem] lg:pb-0'>
        <section>
          <h2 className='text-[1.8rem] lg:text-[2.5rem] font-[600] font-poppins'>Dashboard</h2>
          <p className='text-secondary-text font-jost font-[600]'>Welcome back, Anderson</p>
        </section>
        <section className='flex flex-col md:flex-row mt-4 gap-2'>
        <TeamFormCard />
        <GamesPlayedStat />
        </section>
        <section className='flex flex-col mt-4 md:flex-row gap-2'>
          <TeamGoalsStat />
          <ResultsCard />
          <FixturesCard />
        </section>
    </main>
  )
}
