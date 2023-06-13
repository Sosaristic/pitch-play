import React, { useEffect, useRef, useState } from "react";

import {toast} from "react-toastify"

import { ConfirmationDialog } from "../../UI";
import SquadListCard from "./SquadListCard";
import EditPlayerDetails from "./EditPlayerDetails";
import { getPlayerDetails } from "../../../functions/helperFunctions";
export default function SquadList({teamContext, setMinTeamLength, showAddPlayersModal, setShowAddPlayersModal}) {
  const {
    teamLineUp,
    removePlayer,
    editPlayersDetails,
    addPlayer,
    handleRemoveAnimation
  } = teamContext();
  const [displayConfirmation, setDisplayConfirmation] = useState(false);
  const [showEditPlayersModal, setShowEditPlayersModal] = useState(false);
  const [isPlayerRemoved, setIsPlayerRemoved] = useState(false)
  const playerId = useRef(null);

 
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

  const deletePlayerFromSquad = (id) => {
    if (teamLineUp.length <= 11 && setMinTeamLength) {
      toast.info("Squad Players can't be less than 11")
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
            deletePlayerFromSquad={deletePlayerFromSquad}
            openEditPlayerDialog={openEditPlayerDialog}
          />
        ))}
      </div>
     

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
