import React, { useEffect, useRef, useState } from "react";
import { useTeamData } from "../../../context/MyTeamData";

import { Notification, ConfirmationDialog } from "../../UI";
import SquadListCard from "./SquadListCard";
import EditPlayerDetails from "./EditPlayerDetails";
import { getPlayerDetails } from "../../../functions/helperFunctions";
import { BsPlusLg } from "react-icons/bs";

export default function SquadList() {
  const { teamLineUp, removePlayer, showNotification, setShowNotification } = useTeamData();
  const [displayConfirmation, setDisplayConfirmation] = useState(false);
  const [showEditPlayersModal, setShowEditPlayersModal] = useState(false);
  const [showAddPlayersModal, setShowAddPlayersModal] = useState(false)
  const playerId = useRef(null);

  console.log(teamLineUp);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setShowNotification(false);
    }, 5000);
    return () => clearTimeout(timeOut);
  }, [showNotification]);

  const closeConfirmationDialog = () => {
    setDisplayConfirmation(false);
  };

  const openDialog = (id) => {
    if (teamLineUp.length <= 11) {
      setShowNotification(true);

      return;
    }
    setDisplayConfirmation(true);
    playerId.current = id;
  };

  const handleDialogConfrim = () => {
    removePlayer(playerId?.current);
    closeConfirmationDialog();
  };

  const openEditPlayerDialog = (id) => {
    playerId.current = id;
    setShowEditPlayersModal(true);
  };
  const closeAddPlayersDialog = () => {
    setShowEditPlayersModal(false);
    setShowAddPlayersModal(false)
  };

  const playerNameToDelete = () => {
    const { name } = getPlayerDetails(playerId.current, teamLineUp);
    return name;
  };
  // console.log(teamLineUp);
  return (
    <div>
      <h2 className="w-fit bg-primary p-2 rounded-bl-xl rounded-br-xl font-bold mt-4 ">
        Manage Squad
      </h2>
      <div className="mt-6 flex flex-col">
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
      <button  className="fixed bottom-20 lg:bottom-6 hover:scale-[1.2] transition-all duration-200 z-100 right-2 text-[2rem] h-[2.5rem]  w-[2.5rem] shadow-lg shadow-hover md:h-[3.5rem] md:w-[3.5rem] lg:h-[3.5rem] lg:w-[3.5rem] bg-primary flex items-center justify-center rounded-full"
      onClick={()=>setShowAddPlayersModal(true)}
      >
        <BsPlusLg />
      </button>

      {showEditPlayersModal && (
        <EditPlayerDetails
          closeAddPlayerModal={closeAddPlayersDialog}
          playerId={playerId?.current}
          isEditing={true}
        />
      )}
        {showAddPlayersModal && (
        <EditPlayerDetails
          closeAddPlayerModal={closeAddPlayersDialog}
          playerId={playerId?.current}
          
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
