import React from "react";
import { sideBarLinks } from "../Sidebar/SideBarLinks";
import { NavLink } from "react-router-dom";

export default function BottomNav() {
  return (
    <div className="flex justify-around bg-black items-center py-1">
      {sideBarLinks?.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-center flex-col gap-1 text-gray-500   "
        >
          <NavLink
            to={item.link}
            className={({ isActive }) =>
              isActive
                ? "text-white bg-primary flex flex-col items-center gap-1 text-[1.2rem ]  mx-auto p-2 rounded-tl-2xl rounded-br-2xl"
                : "text-gray-400 bg-grey flex flex-col items-center gap-1 text-[1.2rem ]  mx-auto p-2 rounded-tl-2xl rounded-br-2xl"
            }
          >
            <span className="text-[1rem]">{item.icon}</span>
            <span className=" font-[500] text-[.8rem]">{item.title}</span>

          </NavLink>
        </div>
      ))}
    </div>
  );
}
