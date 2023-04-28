import React from "react";
import { Link } from "react-router-dom";
import { sideBarLinks } from "../Sidebar/SideBarLinks";
import { useLocation } from "react-router-dom";

export default function BottomNav() {
  const { pathname } = useLocation();
  return (
    <div className="flex justify-around bg-black items-center py-2">
      {sideBarLinks?.map((item) => (
        <div key={item.id} className="flex items-center justify-center flex-col gap-1 text-gray-500   ">
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
            {item.icon}
          </Link>
          <p className=" font-[500] text-[.8rem]">{item.title}</p>
        </div>
      ))}
    </div>
  );
}
