import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import TeamsCard from "../../UI/TeamsCard";
import { PopOver } from "../../UI";
import CreateMatchModal from "./CreateMatchModal";
import useClickAwayListener from "../../../hooks/useClickAway";
import SpeedButton from "./SpeedButton";

export default function Matches() {
  const navigate = useNavigate();
  const modalRef = useRef();

  const [openPopOver, setOpenPopOver] = useState(false);
  const [friendlyModal, setFriendlyModal] = useState(false);
  useClickAwayListener(modalRef, closeModal);

  function closeModal() {
    setOpenPopOver(false);
  }
  const handleModalDisplay = (type) => {
    if (type == "friendly") {
      setFriendlyModal(true);
      setOpenPopOver(true);
    } else {
      setFriendlyModal(false);
      setOpenPopOver(true);
    }
  };

  const handleMatchCard =(id)=>{
    navigate(`/dashboard/matches/live/${id}`)
  }

  return (
    <div>
      <div
        className="flex relative flex-wrap justify-evenly  gap-4 px-8 pb-20"
      >
        {Array.from({ length: 2 }, (v, id) =>  (
          
          <TeamsCard key={id} handleMatchCard={handleMatchCard} id={id}/>
        ))}
      </div>
      <SpeedButton handleModalDisplay={handleModalDisplay} />
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
