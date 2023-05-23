import React, { useEffect, useRef, useState } from "react";

import { Notification, ConfirmationDialog } from "../../UI";
import SquadListCard from "./SquadListCard";
import EditPlayerDetails from "./EditPlayerDetails";
import { getPlayerDetails } from "../../../functions/helperFunctions";
import { BsPlusLg } from "react-icons/bs";

export default function SquadList({teamContext, setMinTeamLength}) {
  const {
    teamLineUp,
    removePlayer,
    showNotification,
    setShowNotification,
    editPlayersDetails,
    addPlayer,
    handleRemoveAnimation
  } = teamContext();
  const [displayConfirmation, setDisplayConfirmation] = useState(false);
  const [showEditPlayersModal, setShowEditPlayersModal] = useState(false);
  const [showAddPlayersModal, setShowAddPlayersModal] = useState(false);
  const [isPlayerRemoved, setIsPlayerRemoved] = useState(false)
  const playerId = useRef(null);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setShowNotification(false);
    }, 5000);
    return () => clearTimeout(timeOut);
  }, [showNotification]);

  useEffect(()=>{
if(isPlayerRemoved){
  const timeOut = setTimeout(()=>{
    removePlayer(playerId?.current);
setIsPlayerRemoved(false)
  }, 1000)
  return ()=>clearTimeout(timeOut)
}



  }, [isPlayerRemoved])

  const closeConfirmationDialog = () => {
    setDisplayConfirmation(false);
  };

  const openDialog = (id) => {
    if (teamLineUp.length <= 11 && setMinTeamLength) {
      setShowNotification(true);

      return;
    }
    setDisplayConfirmation(true);
    playerId.current = id;
  };

  const handleDialogConfrim = () => {
    handleRemoveAnimation(playerId?.current)
    setIsPlayerRemoved(true)
    closeConfirmationDialog();
  };

  const openEditPlayerDialog = (id) => {
    playerId.current = id;
    setShowEditPlayersModal(true);
  };
  const closeAddPlayersDialog = () => {
    setShowEditPlayersModal(false);
    setShowAddPlayersModal(false);
  };

  const handleEditPlayer = (editedDetails) => {
    editPlayersDetails(editedDetails);
  };
  const handleAddPlayer = (playerDetails) => {
    addPlayer(playerDetails);
  };

  const playerNameToDelete = () => {
    const { name } = getPlayerDetails(playerId.current, teamLineUp);
    return name;
  };
  // console.log(teamLineUp);
  return (
    <div className="min-h-full">
    
      <div className="mt-6 flex flex-col min-h-full">
        {teamLineUp?.map((item) => (
          <SquadListCard
            key={item.id}
            playerData={item}
            removePlayer={removePlayer}
            // editPlayer = {handleEditAddPlayer}
            openDialog={openDialog}
            openEditPlayerDialog={openEditPlayerDialog}
          />
        ))}
      </div>
      <button
        className="fixed bottom-20 lg:bottom-6 hover:scale-[1.2] transition-all duration-200 z-100 right-2 text-[2rem] h-[2.5rem]  w-[2.5rem] shadow-lg shadow-hover md:h-[3.5rem] md:w-[3.5rem] lg:h-[3.5rem] lg:w-[3.5rem] bg-primary flex items-center justify-center rounded-full"
        onClick={() => setShowAddPlayersModal(true)}
      >
        <BsPlusLg />
      </button>

      {showEditPlayersModal && (
        <EditPlayerDetails
          closeAddPlayerModal={closeAddPlayersDialog}
          playerId={playerId?.current}
          isEditing={true}
          editPlayersDetails={handleEditPlayer}
          lineUp={teamLineUp}
        />
      )}
      {showAddPlayersModal && (
        <EditPlayerDetails
          closeAddPlayerModal={closeAddPlayersDialog}
          playerId={playerId?.current}
          addPlayer={handleAddPlayer}
          lineUp={teamLineUp}

        />
      )}

      {showNotification && <Notification />}
      {displayConfirmation && (
        <ConfirmationDialog
          closeDialog={closeConfirmationDialog}
          message={`Remove ${playerNameToDelete()} from Team Squad`}
          handleUpdate={handleDialogConfrim}
        />
      )}
    </div>
  );
}
