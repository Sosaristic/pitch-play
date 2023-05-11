import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { PitchView } from "../../UI";
import { MyTeamNav } from "../../Dashboard";
export default function MyTeam() {
  const [haveTeam, setHaveTeam] = useState(true);
  return (
    <div className="w-full relative">
      <div className="lg:hidden text-center sm:text-left px-2 py-1">
      <Link to="/" className="font-righteous text-primary text-[2rem] lg:text-[2.5rem] py-4">
          PitchPlay
        </Link>
      </div>
      <div className="sticky top-0 z-[100]"><MyTeamNav /></div>

      {haveTeam ? (
        <div className="px-2 pb-[6rem] lg:pb-1  ">
          
          <Outlet />
        </div>
      ) : (
        <div>Dont have a team yet</div>
      )}
    </div>
  );
}
