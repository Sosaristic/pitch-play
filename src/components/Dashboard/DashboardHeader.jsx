import React from "react";
import { useLocation } from "react-router-dom";
import { Avatar } from "../UI";
import { MdArrowDropDown } from "react-icons/md";

export default function DashboardHeader() {
  return (
    <header className="p-2 flex items-center">
      <div
        role="dropdown"
        className="group ml-auto flex gap-2 relative text-dark-grey-rgba font-jost bg-dark-grey items-center px-4 py-1 rounded-md"
      >
        <p className="hidden md:flex items-center  text-[.8rem]">Anderson </p>
        <div className="flex items center">
          <Avatar />
          <span className="text-[1.5rem] flex items-center">
            <MdArrowDropDown />
          </span>
        </div>

        <div className="absolute z-[1000]  scale-0 group-hover:scale-[1] transition-transform right-0  left-0 ">
          <div className="absolute right-0 text-[.8rem] w-[12rem] rounded-sm top-[2rem] py-2 bg-dark-grey flex flex-col items-center gap-2 logout z-[1]    bg-red">
            <div className="w-fit">
              <Avatar />
            </div>
            <p>Anderson</p>
            <button className="bg-primary w-[60%] rounded-lg hover:bg-hover transition-colors duration-300">Sign Out</button>
          </div>
        </div>
      </div>
    </header>
  );
}
