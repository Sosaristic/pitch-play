import React from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { IoMdFootball } from "react-icons/io";

export const sideBarLinks = [
  { id: 1, title: "Overview", link: "/dashboard/overview", icon: <MdDashboard /> },
  { id: 2, title: "Matches", link: "/dashboard/matches", icon: <IoMdFootball /> },
  {id: 3, title: "My Team", link: "/dashboard/my-team", icon: <IoMdFootball />}
];

export default function SideBarLinks() {
 

  return (
    <nav>
      <ul className="flex flex-col gap-6">
      {sideBarLinks.map((nav,i)=>(
             <li key={i}  className='w-full'>
             <NavLink to={`${nav.link}`} className={ ({isActive})=>isActive?"text-white w-full  bg-gradient-to-r from-primary to-light-grey font-[900] flex items-center gap-4 text-[1.2rem ] p-2 rounded-md"
                    : "text-gray-400 bg-grey flex items-center gap-4 text-[1.2rem ]  mx-auto p-2  rounded-md"}>
               <span className="text-[.8rem] lg:text-[1.2rem] font-semibold">{nav.icon}</span>
              {nav.title}
             </NavLink>
           </li>
           ))}                
      </ul>
    </nav>
  );
}
