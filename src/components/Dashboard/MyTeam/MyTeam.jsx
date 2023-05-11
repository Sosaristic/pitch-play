import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { PitchView } from "../../UI";
import { MyTeamNav } from "../../Dashboard";
export default function MyTeam() {
  const [haveTeam, setHaveTeam] = useState(true);
  return (
    <div>
      <MyTeamNav />

      {haveTeam ? (
        <div className="px-2 pb-8">
          
          <Outlet />
        </div>
      ) : (
        <div>Dont have a team yet</div>
      )}
    </div>
  );
}
