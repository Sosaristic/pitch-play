import React from "react";
import {TfiClose} from "react-icons/tfi"
import FriendlyModal from "./FriendlyModal";
import CompetitionModal from "./CompetitionModal";

export default function CreateMatchModal({ modalRef, closeModal, friendlyModal }) {
  return (
    <div ref={modalRef} className="bg-white  pt-6 relative match-modal w-[95%] md:w-[80%] scale-0 lg:w-[50%] mx-auto min-h-[85%] max-h-[85%] overflow-y-auto text-black">
     {friendlyModal? <FriendlyModal closeModal={closeModal}/>: <CompetitionModal />}
      <button className="fixed bottom-20 lg:bottom-6 hover:scale-[1.2] transition-all duration-200 z-100 right-2 text-[2rem] h-[2.5rem]  w-[2.5rem] shadow-lg shadow-hover md:h-[3.5rem] md:w-[3.5rem] lg:h-[3.5rem] lg:w-[3.5rem] bg-primary flex items-center justify-center rounded-full" onClick={closeModal}><TfiClose /></button>
    </div>
  );
}
