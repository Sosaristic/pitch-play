import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
const links = [
  { id: 1, title: "Info", link: "" },
  { id: 2, title: "Summary", link: "summary" },
  { id: 3, title: "Statistics", link: "statistics" },
  { id: 4, title: "Line Ups", link: "line-ups" },
];

export default function RoutingLinks() {
  const {pathname} = useLocation()
  const navigate = useNavigate()
  const basePath = pathname.slice(0, 14);

  const handleSetActive = (link) => {
    navigate(`${basePath}${link}`)
  };
  return (
    <ul className="flex gap-4 font-bold text-[.8rem] sm:text-[1rem] lg:text-[1.2rem] mt-4">
      {links.map((item) =>{
    
      return (
        <li
          key={item.id}
          className={`${pathname == `${basePath}${item.link}`? "text-primary border-b-[1px] border-primary" : "" } } cursor-pointer`}
          onClick={() => handleSetActive(item.link)}
        >
          {item.title}
        </li>
      )})}
    </ul>
  );
}
