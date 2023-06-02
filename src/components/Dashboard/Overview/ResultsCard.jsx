import React from "react";

import TeamsCard from "../../UI/TeamsCard";
import { Link } from "react-router-dom";

import { matchResult } from "../../UI/UIData";


export default function ResultsCard() {
  return (
    
    <div className="basis-[30%] flex-1 relative bg-light-grey flex flex-col gap-2 py-3 px-2 rounded-md shadow-dashboard-card">
      <p className="flex font-righteous">Results <Link className="ml-auto hover:underline">View More</Link></p>
{matchResult?.map((matchData)=>{
  return  <TeamsCard key={matchData.matchId} matchData={matchData}/>
})}
       
      
    </div>
  );
}
