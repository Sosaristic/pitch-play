import React from "react";
import { PopOver } from "../../UI";
import { MdClose } from "react-icons/md";

export default function ChangePlayerModal({ playerName, closeModal, modalRef, makeCaptain }) {
  return (
    <PopOver>
      <div ref={modalRef} className=" flex flex-col items-stretch relative w-[80%] lg:w-[30%] transition-transform match-modal scale-0 rounded-md overflow-hidden bg-white gap-4 pb-4 change-player-modal-shadow">
        <p className="text-black font-extrabold text-center bg-gradient-to-r py-2 from-primary from-0% to-white to-50%">
          {playerName}
        </p>
        <button className="w-[80%] h-[2rem] lg:hover:bg-hover self-center bg-primary rounded-2xl">
          Change Player
        </button>
        <button className="w-[80%] h-[2rem] lg:hover:bg-hover self-center bg-primary rounded-2xl" onClick={makeCaptain}>
          Make Captain
        </button>
        <button className="absolute top-2 right-1 shadow-2xl text-black text-[1.5rem]" onClick={closeModal}>
          <MdClose />
        </button>
      </div>
    </PopOver>
  );
}
