import React from "react";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
const links = [
  { id: 1, title: "Info", link: "" },
  { id: 2, title: "Summary", link: "summary" },
  { id: 3, title: "Statistics", link: "statistics" },
  { id: 4, title: "Line Ups", link: "line-ups" },
];

export default function RoutingLinks() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const basePath = pathname.slice(0, 14);

 
  return (
    <ul className="flex gap-4 font-bold text-[.8rem] sm:text-[1rem] lg:text-[1.2rem] mt-4 px-2">
      {links.map((item) => {
        return (
          <NavLink key={item.id}
            to={`${basePath}${item.link}`}
            className={({ isActive }) => {
              console.log(isActive);
              return isActive ? "text-primary border-b-[1px] border-primary cursor-default" : "";
            }}
          >
            {item.title}
          </NavLink>
        );
      })}
    </ul>
  );
}
