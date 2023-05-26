import React from "react";
import { Link, useLocation } from "react-router-dom";

const myTeamNavLinks = [
  { id: 1, title: "Line Ups", link: "/dashboard/my-team" },
  { id: 2, title: "Formation", link: "/dashboard/my-team/formation" },
  { id: 3, title: "Squad", link: "/dashboard/my-team/squad-list" },
  { id: 4, title: "Settings", link: "/dashboard/my-team/settings" },
];

export default function MyTeamNav() {
  const {pathname} = useLocation()
  return (
    <div className="flex  bg-dark w-full  gap-[1px]">
      {myTeamNavLinks?.map((item) => {
        return (
          <Link
          key={item.id}
           to={item.link}
           className={`${pathname === item.link? " border-primary p-2 border-b-[3px] text-primary": "bg-gray-500 p-2"} text-[.8rem] lg:text-[1rem] flex-1 text-center font-[600]`}
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
}
