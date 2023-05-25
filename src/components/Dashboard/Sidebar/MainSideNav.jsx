import React from "react";
import Header from "../../Layout/Header";
import { Link } from "react-router-dom";
import SideBarLinks from "./SideBarLinks";

export default function MainSideNav() {
  return (
    <aside className="flex flex-col items-center relative px-2">
      <div className="relative w-full">
        <Link to="/" className="font-righteous text-primary text-[2rem] lg:text-[2rem]">
          PitchPlay
        </Link>
      </div>
      <div className="mt-12 w-full"><SideBarLinks /></div>
    </aside>
  );
}
