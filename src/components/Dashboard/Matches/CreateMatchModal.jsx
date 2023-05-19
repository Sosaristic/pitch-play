import React from "react";
import {TfiClose} from "react-icons/tfi"
import FriendlyModal from "./FriendlyModal";
import CompetitionModal from "./CompetitionModal";

export default function CreateMatchModal({ modalRef, closeModal, friendlyModal }) {
  return (
    <div ref={modalRef} className="bg-white  pt-6 relative match-modal w-[95%] md:w-[80%] scale-0 lg:w-[50%] mx-auto min-h-[85%] max-h-[85%] overflow-y-auto text-black">
     {friendlyModal? <FriendlyModal closeModal={closeModal}/>: <CompetitionModal />}
      <button className="absolute right-2 top-2 text-gray-400   text-[1.5rem]" onClick={closeModal}><TfiClose /></button>
    </div>
  );
}
