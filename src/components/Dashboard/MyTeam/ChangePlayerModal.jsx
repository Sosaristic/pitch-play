import React from "react";
import { PopOver } from "../../UI";
import { MdClose } from "react-icons/md";
import {TbArrowsExchange} from "react-icons/tb"

export default function ChangePlayerModal({
  playerName,
  closeModal,
  modalRef,
  makeCaptain,
  swapIndicator,
  swapButton,
  swapPlayers
}) {

const splitNames = ()=>{

  if(swapButton){
    let firstName, secondName;
    const name = playerName.split(" ")
    firstName = name[0]
    secondName = name[1]
    return {firstName, secondName}
    
    
  }
}

  return (
    <PopOver>
      <div
        ref={modalRef}
        className=" flex flex-col items-stretch relative w-[80%] lg:w-[30%] transition-transform match-modal scale-0 rounded-md overflow-hidden bg-white gap-4 pb-4 change-player-modal-shadow"
      >
        <div className="text-black capitalize font-extrabold text-center bg-gradient-to-r py-2 from-primary from-0% to-white to-50%">
          {!swapButton? playerName : (
            <div className="flex px-4 items-center">
              <span className="flex-[2]">{splitNames().firstName}</span>
              <span className="text-red-500 font-extrabold   flex-1 text-[2rem] flex justify-center items-center"><TbArrowsExchange /></span>
              <span className="flex-[2] flex">{splitNames().secondName}</span>
            </div>
          )
          
          }
        </div>
        {!swapButton ? (
          <div className="self-stretch w-[80%] mx-auto flex flex-col gap-3">
            <button
              className="w-full h-[2rem] lg:hover:bg-hover self-center bg-primary rounded-2xl"
              onClick={swapIndicator}
            >
              Change Player
            </button>
            <button
              className=" w-full h-[2rem] lg:hover:bg-hover self-center bg-primary rounded-2xl"
              onClick={makeCaptain}
            >
              Make Captain
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="w-[80%] h-[2rem] lg:hover:bg-hover self-center bg-primary rounded-2xl"
            onClick={swapPlayers}
          >
            Swap
          </button>
        )}

        <button
          className="absolute top-2 right-1 shadow-2xl text-black text-[1.5rem]"
          onClick={closeModal}
        >
          <MdClose />
        </button>
      </div>
    </PopOver>
  );
}
