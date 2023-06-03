import React from "react";
import { matchFixtures } from "../../UI/UIData";
import { TeamsCard } from "../../UI";

export default function Fixtures() {
  return (
    <div className="flex relative flex-wrap justify-around  gap-4 pb-20 px-2">
    {matchFixtures.map((matchData) => {
        return  <div key={matchData.matchId} className="w-full md:w-[40%]"><TeamsCard  matchData={matchData} fixture={true}/></div>
      })}
  </div>
  );
}
