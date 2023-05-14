import React, { useEffect, useRef, useState } from "react";
import { useTeamData } from "../../../context/MyTeamData";

import { MdOutlineDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { Notification, ConfirmationDialog } from "../../UI";

const PlayerNumber = ({ num }) => {
  return (
    <div className="h-[1.8rem] relative   w-[1.8rem] md:h-[2.5rem] md:w-[2.5rem] rounded-full bg-black text-white flex items-center justify-center font-[600 capitalize] z-20">
      {num}
    </div>
  );
};

const PlayerContainer = ({ playerData, handleDialogConfrim, openDialog }) => {
  const { id, num, name, pos } = playerData;

  const setPlayerPositionLength = (position, type) => {
    if (type === "full") {
      if (position === "gk") return "goalkeeper";
      if (position === "df") return "defender";
      if (position === "mf") return "midfielder";
      if (position === "fw") return "forward";
    } else {
      if (position === "gk") return "gkp";
      if (position === "df") return "def";
      if (position === "mf") return "mid";
      if (position === "fw") return "fwd";
    }
  };

  return (
    <div className="flex text-[.8rem] sm:text-[1.4rem] py-2 items-center border-b border-gray-900 lg:hover:bg-gray-500 cursor-default">
      <div className="flex-1 flex justify-center">
        <PlayerNumber num={num} />
      </div>
      <p className="flex-[2] text-center capitalize">{name}</p>
      <p className="flex-[1] text-center hidden md:block capitalize">
        {setPlayerPositionLength(pos, "full")}
      </p>
      <p className="flex-[1] text-center md:hidden capitalize">
        {setPlayerPositionLength(pos, "short")}
      </p>

      <div className="flex-1 flex text-[1.3rem] md:text-[1.6rem]  justify-evenly">
        <button type="button" className="text-hover lg:hover:text-inherit">
          <AiOutlineEdit />
        </button>
        <button
          type="button"
          className="text-hover lg:hover:text-inherit"
          onClick={() => openDialog(id)}
        >
          <MdOutlineDelete />
        </button>
      </div>
    </div>
  );
};

export default function SquadList() {
  const { teamLineUp, removePlayer, showNotification, setShowNotification } = useTeamData();
  const [displayConfirmation, setDisplayConfirmation] = useState(false);
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
  return (
    <div>
      <h2 className="w-fit bg-primary p-2 rounded-bl-xl rounded-br-xl font-bold mt-4 ">
        Manage Squad
      </h2>
      <div className="mt-6 flex flex-col">
        {teamLineUp?.map((item) => (
          <PlayerContainer
            key={item.id}
            playerData={item}
            removePlayer={removePlayer}
            openDialog={openDialog}
          />
        ))}
      </div>
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
