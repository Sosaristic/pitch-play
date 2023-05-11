import React, { useState, useRef } from "react";
import { useTeamData } from "../../../context/MyTeamData";
import useClickAwayListener from "../../../hooks/useClickAway";

import { PitchView } from "../../UI";
import { PlayerCard } from "../../UI/PitchView";
import ChangePlayerModal from "./ChangePlayerModal";

export default function LineUp() {
  const modalRef = useRef();
  const playerId = useRef(null);
  useClickAwayListener(modalRef, () => closePlayerModal());
  const { teamLineUp, makeCaptain, playerModal, handlePlayerModal } = useTeamData();
  const [nameForModal, setNameForModal] = useState("Player Name");

  const substitutes = teamLineUp.slice(11, teamLineUp.length + 1);
  const handlePlayerClick = (id) => {
    const playerData = teamLineUp?.find((item) => item.id == id);
    setNameForModal(playerData.name);
    playerId.current = id;
    handlePlayerModal(true)
  };

  function closePlayerModal() {
    handlePlayerModal(false)
  }
  const handleMakeCaptain = () => {
    makeCaptain(playerId?.current);
  };

  return (
    <div className="">
      <h1 className="text-lg mt-2 font-bold">Team Line Ups</h1>
      <div>
        <PitchView handlePlayerClick={handlePlayerClick} />
      </div>
      <div>
        <h2 className="w-fit bg-primary p-2 rounded-bl-xl rounded-br-xl font-bold mt-4">
          Substitutes
        </h2>
        <div className="flex flex-wrap justify-between relative gap-3 mt-4">
          {substitutes?.map((item) => (
            <div
              key={item.id}
              className="basis-[30%] lg:basis-[23%] border border-gray-500 p-1 rounded-md  "
            >
              <PlayerCard player={item} handlePlayerClick={handlePlayerClick} />
            </div>
          ))}
        </div>
      </div>
      {playerModal && (
        <ChangePlayerModal
          playerName={nameForModal}
          closeModal={closePlayerModal}
          modalRef={modalRef}
          makeCaptain={handleMakeCaptain}
        />
      )}
    </div>
  );
}
