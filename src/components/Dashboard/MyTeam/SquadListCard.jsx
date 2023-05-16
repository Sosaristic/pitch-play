import React from 'react'
import { MdOutlineDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";

const PlayerNumber = ({ num }) => {
    return (
      <div className="h-[1.8rem] relative   w-[1.8rem] md:h-[2.5rem] md:w-[2.5rem] rounded-full bg-black text-white flex items-center justify-center font-[600 capitalize] z-20">
        {num}
      </div>
    );
  };
  
  export default function SquadListCard({ playerData, openDialog,  openAddPlayerDialog }) {
    const { id, num, name, pos } = playerData;
  
    const setPlayerPositionLength = (position, type) => {
      if (type === "full") {
        if (position === "gk") return "goalkeeper";
        if (position === "df") return "defender";
        if (position === "mf") return "midfielder";
        if (position === "fw") return "forward";
      } else {
        if (position === "gk") return "gkp";
        if (position === "df") return "def";
        if (position === "mf") return "mid";
        if (position === "fw") return "fwd";
      }
    };
  
    return (
      <div className="flex text-[.8rem] sm:text-[1.4rem] py-2 font-poppins items-center border-b border-gray-900 lg:hover:bg-gray-500 cursor-default">
        <div className="flex-1 flex justify-center">
          <PlayerNumber num={num} />
        </div>
        <p className="flex-[2] text-center lg:text-[1 2rem] font-poppins capitalize">{name}</p>
        <p className="flex-[1] text-center hidden md:block capitalize font-poppins">
          {setPlayerPositionLength(pos, "full")}
        </p>
        <p className="flex-[1] text-center md:hidden capitalize font-poppins">
          {setPlayerPositionLength(pos, "short")}
        </p>
  
        <div className="flex-1 flex text-[1.3rem] md:text-[1.6rem]  justify-evenly">
          <button type="button" className="text-primary lg:hover:text-inherit" onClick={()=>openAddPlayerDialog(id)}>
            <AiOutlineEdit />
          </button>
          <button
            type="button"
            className="text-primary lg:hover:text-inherit"
            onClick={() => openDialog(id)}
          >
            <MdOutlineDelete />
          </button>
        </div>
      </div>
    );
  };
