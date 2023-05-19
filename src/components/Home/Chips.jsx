import React, { useState } from "react";
import { chipsData } from "./homeData";
export default function Chips() {
  const [active, setActive] = useState(3);
  const setActiveChip = (id) => {
    setActive(id);
  };

  return (
    <nav className="flex justify-evenly items-center relative">
      {chipsData.map((item) => {
        return (
          <button
            key={item.id}
            className={`px-4 lg:px-6 text-[.8rem] md:text-[1rem] font-[600] py-1 rounded-xl ${
              active == item.id ? "bg-primary" : "bg-grey"
              
            }
            hover:bg-hover transition duration-75
            `}
            onClick={() => setActiveChip(item.id)}
          >
            {item.name}
          </button>
        );
      })}
    </nav>
  );
}
