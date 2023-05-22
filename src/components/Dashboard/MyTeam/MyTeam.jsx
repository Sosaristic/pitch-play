import React, { useState } from "react";
import { Outlet, Link, Navigate } from "react-router-dom";
import { CreateTeam, MyTeamNav } from "../../Dashboard";
export default function MyTeam() {
  const haveTeam = true

 
  return (
    <div className="w-full relative">
     
     {haveTeam && <div className="sticky top-11 lg:top-0 z-[100]"><MyTeamNav /></div>} 

      {haveTeam ? (
        <div className="px-2 pb-[6.5rem] pt-[2rem] lg:pb-1 ">
          
          <Outlet />
        </div>
      ) : (
        <Navigate to="/dashboard/my-team/create-team" replace/>
      )}
    </div>
  );
}
