import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { IoMdFootball } from "react-icons/io";

export const sideBarLinks = [
  { id: 1, title: "Overview", link: "/dashboard", icon: <MdDashboard /> },
  { id: 2, title: "Matches", link: "/dashboard/matches", icon: <IoMdFootball /> },
];

export default function SideBarLinks() {
  const { pathname } = useLocation();
  return (
    <nav>
      <ul className="flex flex-col gap-6">
        {sideBarLinks.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.link}
                className={`
                ${
                  pathname == item.link
                    ? "text-white bg-primary flex items-center gap-4 text-[1.2rem ] w-[80%] mx-auto p-2 rounded-tl-2xl rounded-br-2xl"
                    : "text-gray-400 bg-grey flex items-center gap-4 text-[1.2rem ] w-[80%] mx-auto p-2 rounded-tl-2xl rounded-br-2xl"
                }
                    
                `}
              >
                <span className="text-[1.5rem]">{item.icon}</span> {item.title}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* </nav>
    <NavLink
      className={({ isActive }) =>
        isActive ? "bg-primary flex items-center gap-4 text-[1.2rem ] w-[80%] mx-auto p-2 rounded-lg" : "text-grey"
      }
    >
      <span>
        <MdDashboard />
      </span>{" "}
      Overview
    </NavLink> */}
    </nav>
  );
}
