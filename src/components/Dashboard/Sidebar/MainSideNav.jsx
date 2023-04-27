import React from "react";
import Header from "../../Layout/Header";
import { Link } from "react-router-dom";
import SideBarLinks from "./SideBarLinks";

export default function MainSideNav() {
  return (
    <aside>
      <div className="relative">
        <Link to="/" className="font-righteous text-primary px-8 text-[2rem] lg:text-[2.5rem] py-4">
          PitchPlay
        </Link>
      </div>
      <div className="mt-12"><SideBarLinks /></div>
    </aside>
  );
}
