import React from 'react'
import {Link} from "react-router-dom"
import TeamsCard from '../../UI/TeamsCard'

import { matchFixtures } from "../../UI/UIData";

export default function FixturesCard() {
  return (
    <div className="basis-[30%] flex-1 relative bg-light-grey flex flex-col gap-2 py-3 px-2 rounded-md shadow-dashboard-card">
    <p className="flex font-righteous">Fixtures <Link className="ml-auto hover:underline">View More</Link></p>

{matchFixtures.map((matchData)=>{
  return  <TeamsCard fixture={true} key={matchData.matchId} matchData={matchData}/>
})}
    
  </div>
  )
}
