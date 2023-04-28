import React, { useRef, useState } from "react";
import TeamsCard from "../../UI/TeamsCard";
import { PopOver } from "../../UI";
import CreateMatchModal from "./CreateMatchModal";
import useClickAwayListener from "../../../hooks/useClickAway";

export default function Matches() {
  const modalRef = useRef();
  const [openPopOver, setOpenPopOver] = useState(false);
  useClickAwayListener(modalRef, closeModal);

  function closeModal() {
    setOpenPopOver(false);
  }
  return (
    <div>
      <div className="flex relative flex-wrap justify-evenly  gap-4 px-8 pb-20">
        {Array.from({ length: 8 }, (v, id) => (
          <TeamsCard key={id} />
        ))}
      </div>
      <button
        className="create-btn-shadow fixed flex items-center justify-center text-[.8rem] lg:text-[1rem] font-[600]  bottom-[15%] right-[10%] lg:bottom-[10%] w-[3rem] h-[3rem] sm:w-[5rem] sm:h-[5rem]  rounded-full p-8 bg-primary"
        onClick={() => setOpenPopOver(true)}
      >
        Create Match
      </button>
      {openPopOver && (
        <PopOver>
          <CreateMatchModal modalRef={modalRef} />
        </PopOver>
      )}
    </div>
  );
}
