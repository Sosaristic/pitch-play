import React, { useState, useRef, useLayoutEffect } from "react";
import { useTeamData } from "../../../context/MyTeamData";
import useClickAwayListener from "../../../hooks/useClickAway";

import { PitchView } from "../../UI";
import { PlayerCard } from "../../UI/PitchView";
import ChangePlayerModal from "./ChangePlayerModal";

export default function LineUp() {
  const [displaySwapModal, setDisplaySwapModal] = useState(false);
  const modalRef = useRef();
  const firstPlayerId = useRef(null);
  const secondPlayerId = useRef(null);
  useClickAwayListener(modalRef, () => closePlayerModal());
  const {
    teamLineUp,
    makeCaptain,
    playerModal,
    isSwapping,
    handlePlayerModal,
    indicatePlayerToSwap,
    swapPlayers,
    setIsSwapping,
    resetSwappingIndicators,
  } = useTeamData();

  useLayoutEffect(() => {
    resetValuesToDefault();
    resetSwappingIndicators();
  }, []);

  const [nameForModal, setNameForModal] = useState("Player Name");

  const substitutes = teamLineUp.slice(11, teamLineUp.length + 1);

  const handlePlayerClick = (id) => {
    const playerData = teamLineUp?.find((item) => item.id == id);
    setNameForModal(playerData.name);
    if (!isSwapping) {
      firstPlayerId.current = id;
    }

    if (isSwapping) {
      secondPlayerId.current = id;
      const playerOneName = teamLineUp?.find((item) => item.id == firstPlayerId.current);
      const playerTwoName = teamLineUp?.find((item) => item.id == secondPlayerId.current);

      setNameForModal(`${playerOneName.name} ${playerTwoName.name}`);

      setDisplaySwapModal(true);
    }

    handlePlayerModal(true);
  };

  function closePlayerModal() {
    handlePlayerModal(false);
  }
  const handleMakeCaptain = () => {
    makeCaptain(firstPlayerId?.current);
  };

  function showSwapIndicator() {
    indicatePlayerToSwap(firstPlayerId.current);
  }

  function handleSwapPlayers() {
    swapPlayers(firstPlayerId.current, secondPlayerId.current);
    resetValuesToDefault();
  }

  function resetValuesToDefault() {
    setDisplaySwapModal(false);
    setNameForModal("player name");
    firstPlayerId.current = null;
    secondPlayerId.current = null;
    handlePlayerModal(false);
    setIsSwapping(false);
  }

  return (
    <div className="">
      <h1 className="text-lg mt-2 font-bold">Team Line Ups</h1>
      <div>
        <PitchView handlePlayerClick={handlePlayerClick} isSwapping={isSwapping} />
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
              <PlayerCard
                player={item}
                handlePlayerClick={handlePlayerClick}
                isSwapping={isSwapping}
              />
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
          firstPlayerId={firstPlayerId.current}
          swapIndicator={showSwapIndicator}
          swapButton={displaySwapModal}
          swapPlayers={handleSwapPlayers}
        />
      )}
    </div>
  );
}
