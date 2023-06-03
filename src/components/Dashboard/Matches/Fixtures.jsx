import React from "react";
import { matchFixtures } from "../../UI/UIData";
import { TeamsCard } from "../../UI";

export default function Fixtures() {
  return (
    <div className="flex relative flex-wrap justify-around  gap-4 pb-20 px-2">
      {matchFixtures.map((item) => {
        return <TeamsCard key={item.matchId} matchData={item} fixture={true}/>;
      })}
    </div>
  );
}
