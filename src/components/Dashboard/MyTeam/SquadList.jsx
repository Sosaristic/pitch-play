import React, { useEffect, useRef, useState } from "react";
import { useTeamData } from "../../../context/MyTeamData";


import { Notification, ConfirmationDialog } from "../../UI";
import SquadListCard from "./SquadListCard";
import EditPlayerDetails from "./EditPlayerDetails";


export default function SquadList() {
  const { teamLineUp, removePlayer, showNotification, setShowNotification } = useTeamData();
  const [displayConfirmation, setDisplayConfirmation] = useState(false);
  const [showAddPlayersModal, setShowAddPlayersModal] = useState(false)
  const playerId = useRef(null);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setShowNotification(false);
    }, 5000);
    return () => clearTimeout(timeOut);
  }, [showNotification]);

  const closeDialog = () => {
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
    closeDialog();
  };

  const openAddPlayerDialog = ()=>{
    setShowAddPlayersModal(true)
  }
  const closeAddPlayersDialog = ()=>{
    setShowAddPlayersModal(false)
  }
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
            openDialog={openDialog}
            openAddPlayerDialog={openAddPlayerDialog}
          />
        ))}
      </div>
{showAddPlayersModal &&  <EditPlayerDetails closeAddPlayerModal={closeAddPlayersDialog}/>}
     
      {showNotification && <Notification />}
      {displayConfirmation && (
        <ConfirmationDialog
          closeDialog={closeDialog}
          message="Remove player from Team Squad"
          handleUpdate={handleDialogConfrim}
        />
      )}
    </div>
  );
}
