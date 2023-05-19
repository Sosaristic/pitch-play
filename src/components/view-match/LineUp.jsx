import React from "react";
import { IoMdShirt } from "react-icons/io";
import { squad } from "./view-match-data";
import Squad from "./Squad";


export default function LineUp() {
  return (
    <div className="mt-8 ">
      <p className=" flex items-center rounded-[0_0_8px_8px] h-[2rem] px-8 py-4 w-fit text-center bg-primary mb-4">
        Starters
      </p>
      <div className="flex flex-col vs:flex-row">
        <Squad squad={squad} team="Home Team" />
        <Squad squad={squad} team="Away Team" />
      </div>
      <p className=" flex items-center rounded-[0_0_8px_8px] h-[2rem] px-8 py-4 w-fit text-center bg-primary mt-4 mb-4">
        Subs
      </p>
      <div className="flex flex-col vs:flex-row">
        <Squad squad={squad} team="Home Team" />
        <Squad squad={squad} team="Away Team" />
      </div>
      <p className=" flex items-center rounded-[0_0_8px_8px] h-[2rem] px-8 py-4 w-fit text-center bg-primary mt-4 mb-4">
        Managers
      </p>
      <div className="flex relative font-poppins">
        <p className="w-1/2">Hon. Miracle</p>
        <p className="1/2">Hon. Anderson</p>
      </div>
    </div>
  );
}
