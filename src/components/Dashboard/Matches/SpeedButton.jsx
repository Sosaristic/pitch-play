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
      className="fixed flex items-center justify-center text-[.8rem] lg:text-[1rem] font-[600]  bottom-[15%] right-[10%] lg:bottom-[10%] w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem]  rounded-full p-8 bg-primary"
      onClick={() => setOpenSpeedDial((prev) => !prev)}
    >
      <div
        className={`absolute bottom-[100%] right-1  flex flex-col gap-4 ${
          openSpeedDial ? "open-speed-dial" : "close-speed-dial"
        } overflow-hidden`}
      >
        <div
          className="flex items-center gap-4 w-full bg-primary rounded-2xl px-4 py-1 "
          onClick={() => handleModalDisplay("friendly")}
        >
          <div className="text-[1rem] font-bold">Friendly</div>{" "}
          <span className="text-[2rem] ml-auto flex items-center justify-center">
            <GiSoccerKick />
          </span>
        </div>
        <div className="flex items-center gap-4 w-full bg-primary rounded-2xl px-4 py-1" onClick={()=>handleModalDisplay("competition")}>
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
