import React from "react";
import { useNavigate, } from "react-router-dom";

import TeamsCard from "../../UI/TeamsCard";
import { matchResult } from "../../UI/UIData";

export default function Matches() {
  const navigate = useNavigate();

  

  const handleMatchCard =(id)=>{
    navigate(`/dashboard/matches/live/${id}`)
  }

  return (
    <div>
      <div
        className="flex w-full relative flex-wrap justify-around  gap-4 px-2 pb-20"
      >
        {matchResult.map((matchData)=>{
          return  <div key={matchData.matchId} className="w-full md:w-[40%]"><TeamsCard  matchData={matchData} handleMatchCard={handleMatchCard}/></div>
        })
          
        }
      </div>
      
    </div>
  );
}
