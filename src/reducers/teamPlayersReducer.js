export function teamPlayersReducer(teamPlayers, action){
    switch(action?.type){
        case "REMOVE_PLAYER": {
            return teamPlayers.filter((item)=>item.id !== action.playerID)
            
        }
        case "EDIT_PLAYER_DETAILS": {}
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
            console.log("hello")
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


    }

}