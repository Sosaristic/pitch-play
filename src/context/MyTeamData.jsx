import React, { createContext, useContext, useState } from "react";
import { homePlayers } from "../components/UI/UIData";

const TeamDataContext = createContext();
export function MyTeamDataProvider({ children }) {
  const [teamLineUp, setTeamLineUp] = useState(homePlayers);
  const [teamFormation, setTeamFormation] = useState("442");
  const [playerModal, setPlayerModal] = useState(false);
  const [isSwapping, setIsSwapping] = useState(false);
  


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
    handlePlayerModal(false);
  }

  function indicatePlayerToSwap(id){


const setSwapIndicator = teamLineUp?.map((item)=>{
  if(item.id === id){
  
    return {...item, swapColor: true}
  }
  return item
})


setTeamLineUp(setSwapIndicator)
setIsSwapping(true)
setPlayerModal(false)

  }

  function handlePlayerModal(state) {
    setPlayerModal(state);
  }

  function swapPlayers(playerOneId, playerTwoId) {
    const firstPlayerDetails = teamLineUp?.find((item)=>item.id === playerOneId)
    const secondPlayerDetails = teamLineUp?.find((item)=>item.id === playerTwoId)
const firstPlayerIndex = teamLineUp.indexOf(firstPlayerDetails)
const secondPlayerIndex = teamLineUp.indexOf(secondPlayerDetails)
const lineUpCopy = [...teamLineUp]
lineUpCopy[firstPlayerIndex]= secondPlayerDetails
lineUpCopy[secondPlayerIndex] = firstPlayerDetails

const resetSwapColors = lineUpCopy.map((item)=>{
  return {...item, swapColor: false}
})
setTeamLineUp(resetSwapColors)

  }

  function setPlayersSwapableIndicator(id) {
    console.log(id);
    indicatePlayerToSwap(id)
  }

 
  const value = {
    teamLineUp,
    teamFormation,
    handleTeamFormation,
    makeCaptain,
    playerModal,
    handlePlayerModal,
    setPlayersSwapableIndicator,
    isSwapping,
    swapPlayers, 
    setIsSwapping,
    setTeamLineUp

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
