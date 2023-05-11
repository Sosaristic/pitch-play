import React, { createContext, useContext, useState } from "react";
import { homePlayers } from "../components/UI/UIData";

const TeamDataContext = createContext();
export function MyTeamDataProvider({ children }) {
  const [teamLineUp, setTeamLineUp] = useState(homePlayers);
  const [teamFormation, setTeamFormation] = useState("442");
  const [playerModal, setPlayerModal] = useState(false);

  const handleTeamFormation = (formation) => {
    setTeamFormation(formation);
  };

  function makeCaptain(id) {
    const removeAllCaptains = teamLineUp?.map((item) => {
      return { ...item, isCaptain: false };
    });

    const setCaptain = removeAllCaptains.map((item) => {
      if (item.id === id) {
        return { ...item, isCaptain: true };
      }
      return item;
    });

    setTeamLineUp(setCaptain);
    handlePlayerModal(false)
  }

function handlePlayerModal(state){
    setPlayerModal(state)
}

  const value = { teamLineUp, teamFormation, handleTeamFormation, makeCaptain, playerModal, handlePlayerModal };
  return <TeamDataContext.Provider value={value}>{children}</TeamDataContext.Provider>;
}

export function useTeamData() {
  const teamContext = useContext(TeamDataContext);
  if (teamContext === undefined) {
    throw new Error("useTeamData must be within a TeamDataProvider");
  }
  return teamContext;
}
