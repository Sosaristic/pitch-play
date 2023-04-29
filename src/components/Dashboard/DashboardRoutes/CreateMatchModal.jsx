import React from "react";
import {TfiClose} from "react-icons/tfi"
import FriendlyModal from "./FriendlyModal";
import CompetitionModal from "./CompetitionModal";

export default function CreateMatchModal({ modalRef, closeModal, friendlyModal }) {
  return (
    <div ref={modalRef} className="bg-white pt-6 relative match-modal mt-4 w-[95%] md:w-[80%] scale-0 lg:w-[50%] mx-auto min-h-[80%] text-black">
     {friendlyModal? <FriendlyModal />: <CompetitionModal />}
      <button className="absolute right-0 -top-10 text-gray-400   text-[2rem]" onClick={closeModal}><TfiClose /></button>
    </div>
  );
}
