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
             <NavLink to={`${nav.link}`} className={ ({isActive})=>isActive?"text-white bg-primary flex items-center gap-4 text-[1.2rem ] w-[80%] mx-auto p-2 rounded-tl-2xl rounded-br-2xl"
                    : "text-gray-400 bg-grey flex items-center gap-4 text-[1.2rem ] w-[80%] mx-auto p-2 rounded-tl-2xl rounded-br-2xl"}>
               <span className='text-[.8rem] lg:text-[1rem] font-semibold'>{nav.icon}</span>
              {nav.title}
             </NavLink>
           </li>
           ))}                
      </ul>
    </nav>
  );
}
