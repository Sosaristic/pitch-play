import React, { useState } from "react";
import { Outlet, Link, Navigate } from "react-router-dom";
import { CreateTeam, MyTeamNav } from "../../Dashboard";
import { useAppContext } from "../../../context/AppContext";
import { UserHasNoTeam } from "../../UI";
export default function MyTeam() {
const {userHasTeam} = useAppContext()

 if(!userHasTeam){
  return <div><UserHasNoTeam /></div>
 }
  return (
    <div className="w-full relative">
     
     {haveTeam && <div className="sticky top-0 lg:top-0 z-[100]"><MyTeamNav /></div>} 

      {haveTeam ? (
        <div className="px-2 pb-[6.5rem] lg:pb-1 overflow-hidden">
          
          <Outlet />
        </div>
      ) : (
        <Navigate to="/dashboard/my-team/create-team" replace/>
      )}
    </div>
  );
}
