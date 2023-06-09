import React, { createContext, useContext, useReducer, useState } from "react";
import { homePlayers } from "../components/UI/UIData";
import { teamPlayersReducer } from "../reducers/teamPlayersReducer";
import { useTeamPlayers } from "../hooks/useTeamPlayers";



const TeamDataContext = createContext();
export function MyTeamDataProvider({ children }) {
  const {teamPlayers} = useTeamPlayers()
  const [teamLineUp, dispatch] = useReducer(teamPlayersReducer, teamPlayers);
  const [teamFormation, setTeamFormation] = useState("442");
  const [playerModal, setPlayerModal] = useState(false);
  const [isSwapping, setIsSwapping] = useState(false);
  const [showNotification, setShowNotification] = useState(false)

  const handleTeamFormation = (formation) => {
    setTeamFormation(formation);
  };

  function makeCaptain(id) {
    dispatch({
      type: "MAKE_CAPTAIN",
      playerID: id,
    });

    handlePlayerModal(false);
  }

  function indicatePlayerToSwap(id) {
    dispatch({
      type: "PLAYER_SWAP_INDICATOR",
      playerID: id,
    });

    setIsSwapping(true);
    setPlayerModal(false);
  }

  function handlePlayerModal(state) {
    setPlayerModal(state);
  }

  function swapPlayers(playerOneId, playerTwoId) {
    dispatch({
      type: "SWAP_PLAYERS",
      playerOneId,
      playerTwoId,
    });
  }

  
  function resetSwappingIndicators() {
    dispatch({
      type: "RESET_SWAPPING_INDICATOR",
    });
  }
function removePlayer(playerID){


dispatch({
  type: "REMOVE_PLAYER",
  playerID,
})


}
function handleRemoveAnimation(playerID){
  dispatch({
    type: "INDICATE_PLAYER_TO_REMOVE",
    playerID
  })
}

function editPlayersDetails(editDetails){
dispatch({
  type: "EDIT_PLAYER_DETAILS",
  editDetails
})
}
function addPlayer(playerData){
dispatch({
  type: "ADD_PLAYER",
  playerData
})
}

  const value = {
    teamLineUp,
    teamFormation,
    handleTeamFormation,
    makeCaptain,
    playerModal,
    handlePlayerModal,
    isSwapping,
    swapPlayers,
    setIsSwapping,
    resetSwappingIndicators,
    indicatePlayerToSwap,
    removePlayer,
    showNotification,
    setShowNotification,
    editPlayersDetails,
    addPlayer,
    handleRemoveAnimation,
  };
  return <TeamDataContext.Provider value={value}>{children}</TeamDataContext.Provider>;
}

export function useTeamData() {
  const teamContext = useContext(TeamDataContext);
  if (teamContext === undefined) {
    throw new Error("useTeamData must be within a TeamDataProvider");
  }
  return teamContext;
}


