import React, { useState } from "react";
import { Outlet, Link, Navigate } from "react-router-dom";
import { CreateTeam, MyTeamNav } from "../../Dashboard";
import { useAppContext } from "../../../context/AppContext";
import { UserHasNoTeam } from "../../UI";
export default function MyTeam() {
  const { userHasTeam } = useAppContext();

  if (!userHasTeam) {
    return (
      <div>
        <UserHasNoTeam />
      </div>
    );
  }
  return (
    <div className="w-full relative">
      <div className="sticky top-0 lg:top-0 z-[100]">
        <MyTeamNav />
      </div>

      <div className="px-2 pb-[6.5rem] lg:pb-1 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}
