import React, { useRef, useState } from "react";

import TeamsCard from "../../UI/TeamsCard";
import { PopOver } from "../../UI";
import CreateMatchModal from "./CreateMatchModal";
import useClickAwayListener from "../../../hooks/useClickAway";
import SpeedButton from "./SpeedButton";

export default function Matches() {
  const modalRef = useRef();

  const [openPopOver, setOpenPopOver] = useState(false);
  const [friendlyModal, setFriendlyModal] = useState(false);
  useClickAwayListener(modalRef, closeModal);

  function closeModal() {
    setOpenPopOver(false);
  }
const handleModalDisplay = (type)=>{
  if(type == "friendly"){
    setFriendlyModal(true)
    setOpenPopOver(true)
  }
  else{
    setFriendlyModal(false)
  setOpenPopOver(true)
  }
}

  return (
    <div>
      <div className="flex relative flex-wrap justify-evenly  gap-4 px-8 pb-20">
        {Array.from({ length: 2 }, (v, id) => (
          <TeamsCard key={id} />
        ))}
      </div>
      <SpeedButton handleModalDisplay={handleModalDisplay}/>
      {openPopOver && (
        <PopOver>
          <CreateMatchModal
            modalRef={modalRef}
            closeModal={closeModal}
            friendlyModal={friendlyModal}
          />
        </PopOver>
      )}
    </div>
  );
}
