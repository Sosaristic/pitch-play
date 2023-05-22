import React, { useRef, useState } from "react";

import useClickAwayListener from "../../../hooks/useClickAway";
import { BsPlusLg, BsFillTrophyFill } from "react-icons/bs";
import { GiSoccerKick } from "react-icons/gi";
import { MdClose } from "react-icons/md";

 function SpeedButton({ handleModalDisplay }) {
  const speedRef = useRef();
  const [openSpeedDial, setOpenSpeedDial] = useState(false);
  useClickAwayListener(speedRef, () => setOpenSpeedDial(false));

  return (
    <button
      ref={speedRef}
      className="fixed bottom-20 lg:bottom-6  z-100 right-2 text-[2rem] h-[2.5rem]  w-[2.5rem] shadow-lg shadow-hover md:h-[3.5rem] md:w-[3.5rem] lg:h-[3.5rem] lg:w-[3.5rem] bg-primary flex items-center justify-center rounded-full"
      onClick={() => setOpenSpeedDial((prev) => !prev)}
    >
      <div
        className={`absolute bottom-[100%] right-1  flex flex-col gap-4 ${
          openSpeedDial ? "open-speed-dial" : "close-speed-dial"
        } overflow-hidden`}
      >
        <div
          className="flex items-center gap-4 w-full bg-primary rounded-lg px-4 py-1 "
          onClick={() => handleModalDisplay("friendly")}
        >
          <div className="text-[1rem] font-bold">Friendly</div>{" "}
          <span className="text-[2rem] ml-auto flex items-center justify-center">
            <GiSoccerKick />
          </span>
        </div>
        <div className="flex items-center gap-4 w-full bg-primary rounded-lg px-4 py-1" onClick={()=>handleModalDisplay("competition")}>
          <div className="text-[1rem]"> Competition</div>
          <span className="text-[2rem] flex ml-auto  items-center justify-center ">
            <BsFillTrophyFill />
          </span>
        </div>
      </div>
      <div className="text-[2.5rem]">{openSpeedDial ? <MdClose /> : <BsPlusLg />}</div>
    </button>
  );
}
export default React.memo(SpeedButton)
