import React, { useState} from "react";
import { set } from "date-fns";

import LiveUpdateButtons from "./LiveUpdateButtons";
import { Button, ConfirmationDialog, Loader, ScoreBoard } from "../../UI";

export default function ScoreUpdater() {
  const [matchStats, setMatchStats] = useState([
    { id: 1, type: "goals", homeScore: 0, awayScore: 0 },
    { id: 2, type: "shots off target", homeScore: 0, awayScore: 0 },
    { id: 3, type: "shots on target", homeScore: 0, awayScore: 0 },
    { id: 4, type: "fouls", homeScore: 0, awayScore: 0 },
    { id: 5, type: "corners", homeScore: 0, awayScore: 0 },
    { id: 6, type: "offsides", homeScore: 0, awayScore: 0 },
    { id: 7, type: "yellow cards", homeScore: 0, awayScore: 0 },
    { id: 8, type: "red cards", homeScore: 0, awayScore: 0 },
  ]);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [matchTime, setMatchTime] = useState(Date.now())
  const [stopTime, setStopTime] = useState(false)
  const [loader, setLoader] = useState(false)
  const [gameInterval, setGameInterval] = useState(1);

  function handleLiveUpdateButtons(scoreType, team, valueToAdd) {
    setLoader(true)
    const promise = new Promise(function(resolve, reject){
    setTimeout(()=>{
      resolve(
        
      )
    }, 1000)
  });
  promise.then(()=>{
     const newValues = matchStats?.map((item) => {
      if (item.type === scoreType) {
        return { ...item, [team]: item[team] + valueToAdd };
      }
      return item;
    });
    setMatchStats(newValues)
    setLoader(false)
  })
  }

  const handleOpenDialog = ()=>{
      setOpenConfirmDialog(true)
    
  }

 const closeDialog = ()=>{
  setOpenConfirmDialog(false)
 }


 const handleInterval = ()=>{
  if (gameInterval > 0 && gameInterval < 3){
setGameInterval(prev=>prev + 1)
closeDialog()
  }
  else{
    console.log("Match has ended");
    closeDialog()
  }
  if(gameInterval == 1){
    setStopTime(true)
  }
  if(gameInterval == 2){
    const date = new Date()
    const secondHalfTime = date.setMinutes(date.getMinutes() - 45)
    setMatchTime(secondHalfTime)
    setStopTime(false)
  }
 }


  return (
    <div className="w-[95%] lg:w-[60%] mx-auto min-h-screen pb-[5rem]">
      <div className=" mx-auto">
        <ScoreBoard scoreBoardData={matchStats[0]} showSeconds={true} matchTime= {matchTime} stopTime={stopTime}/>
      </div>

      <div className="relateive mt-4 flex flex-col gap-4">
        {matchStats?.map((item) => {
          return (
            <LiveUpdateButtons
              key={item.id}
              valuesData={item}
              updateValues={handleLiveUpdateButtons}
            />
          );
        })}
      </div>

      <div className="flex mt-4 md:w-[50%] mx-auto gap-2">
        <Button
          value={gameInterval == 1? "End 1st Half" : gameInterval == 2? "Start 2nd Half" : "End Match"}
          
          onClick={handleOpenDialog}
        />
       
      </div>
      {loader && <Loader /> }

      {openConfirmDialog && (
        <ConfirmationDialog
          closeDialog={() => closeDialog()}
          handleUpdate={handleInterval}
          message={gameInterval === 1? "End First Half" : gameInterval === 2? "Start Second Half" : "End Match"}
        />
      )}
     
    </div>
  );
}
