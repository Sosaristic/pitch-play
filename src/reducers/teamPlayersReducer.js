import { modifyPlayerDetails } from "../functions/helperFunctions"

export function teamPlayersReducer(teamPlayers, action){
    switch(action?.type){
        case "REMOVE_PLAYER": {
            return teamPlayers.filter((item)=>item.id !== action.playerID)
            
        }
        case "EDIT_PLAYER_DETAILS": {
          const {playerName, playerNumber, position, playerId} = action.editDetails
          
          const changedDetails = teamPlayers?.map((player)=>{
            if(player.id == playerId){
              return {...player, name: playerName, num: +(playerNumber) , pos: position}
            }
            return player
          })
          return changedDetails
        }
        case "SWAP_PLAYERS": {
            const firstPlayerDetails = teamPlayers?.find((item)=>item.id === action.playerOneId)
            const secondPlayerDetails = teamPlayers?.find((item)=>item.id === action.playerTwoId)
        const firstPlayerIndex = teamPlayers.indexOf(firstPlayerDetails)
        const secondPlayerIndex = teamPlayers.indexOf(secondPlayerDetails)
        const lineUpCopy = [...teamPlayers]
        lineUpCopy[firstPlayerIndex]= secondPlayerDetails
        lineUpCopy[secondPlayerIndex] = firstPlayerDetails
        
        const resetSwapColors = lineUpCopy.map((item)=>{
          return {...item, swapColor: false}
        })
        return resetSwapColors
        }
        case "RESET_SWAPPING_INDICATOR": {
            const removeSwapColor = teamPlayers?.map((item)=>{
                return {...item, swapColor: false}
              })
              return removeSwapColor
        }
        case "PLAYER_SWAP_INDICATOR": {
            const setSwapIndicator = teamPlayers?.map((item)=>{
                if(item.id === action.playerID){
                
                  return {...item, swapColor: true}
                }
                return item
              })
              return setSwapIndicator
        }

        case "MAKE_CAPTAIN" : {
           
            const removeAllCaptains = teamPlayers?.map((item) => {
                return { ...item, isCaptain: false };
              });
              console.log(removeAllCaptains);
          
              const setCaptain = removeAllCaptains.map((item) => {
                if (item.id === action.playerID) {
                  return { ...item, isCaptain: true };
                }
                return item;
              });
             
              
              return setCaptain
          
        }
        case "ADD_PLAYER": {
          const newPlayers = [...teamPlayers, action.playerData]
          return newPlayers
        }
        case "INDICATE_PLAYER_TO_REMOVE": {
          const id = action.playerID
          const modifiedData = modifyPlayerDetails(id, teamPlayers, "isRemoved", true)
          return modifiedData
        }
        


    }

}