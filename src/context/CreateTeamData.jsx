import React, { createContext, useContext, useReducer, useState } from "react";
import { teamPlayersReducer } from "../reducers/teamPlayersReducer";

const NewTeamDataContext = createContext();
export function NewTeamDataProvider({ children }) {
  const [teamLineUp, dispatch] = useReducer(teamPlayersReducer, []);
  const [showNotification, setShowNotification] = useState(false);

  function removePlayer(playerID) {
    dispatch({
      type: "REMOVE_PLAYER",
      playerID,
    });
  }

  function editPlayersDetails(editDetails) {
    dispatch({
      type: "EDIT_PLAYER_DETAILS",
      editDetails,
    });
  }
  function addPlayer(playerData) {
    dispatch({
      type: "ADD_PLAYER",
      playerData,
    });
  }

  const value = {
    teamLineUp,

    removePlayer,
    showNotification,
    setShowNotification,
    editPlayersDetails,
    addPlayer,
  };
  return <NewTeamDataContext.Provider value={value}>{children}</NewTeamDataContext.Provider>;
}

export function useNewTeamData() {
  const newTeamData = useContext(NewTeamDataContext);
  if (newTeamData === undefined) {
    throw new Error("useTeamData must be within a TeamDataProvider");
  }
  return newTeamData;
}
