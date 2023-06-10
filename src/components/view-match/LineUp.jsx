import React, { useState } from "react";
import Squad from "./Squad";
import { useTeamPlayers } from "../../hooks/useTeamPlayers";

export default function LineUp() {
  const [homeTeam, setHomeTeam] = useState(true);
  const { teamPlayers } = useTeamPlayers();

  const subs = teamPlayers.slice(11, teamPlayers.length + 1);

  return (
    <div className="mt-8 ">
      <div className="flex gap-4">
        <button
          onClick={() => setHomeTeam(true)}
          className={`h-[2rem] px-4 rounded-md ${
            homeTeam ? "bg-primary" : "bg-light-grey border-light-grey"
          }`}
        >
          Home
        </button>
        <button
          onClick={() => setHomeTeam(false)}
          className={`h-[2rem] px-4 rounded-md  ${
            !homeTeam ? "bg-primary" : "bg-light-grey border-light-grey"
          } `}
        >
          Away
        </button>
      </div>
      {homeTeam ? (
        <Squad lineUp={teamPlayers} subs={subs} formation="4231" manager="Anderson"/>
      ) : (
        <Squad lineUp={teamPlayers} subs={subs} formation="4141" manager="Miracle"/>
      )}
    </div>
  );
}
