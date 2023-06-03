import React from "react";
import { matchResult } from "../../UI/UIData";
import { TeamsCard } from "../../UI";

export default function Fixtures() {
  return (
    <div className="flex relative flex-wrap justify-around  gap-4 pb-20 px-2">
      {matchResult.map((item) => {
        return <TeamsCard key={item.matchId} matchData={item} />;
      })}
    </div>
  );
}
