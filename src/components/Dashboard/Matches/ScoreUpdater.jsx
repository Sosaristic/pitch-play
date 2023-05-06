import React, { useState, useRef } from "react";
import { ScoreBoard } from "../../view-match";
import LiveUpdateButtons from "./LiveUpdateButtons";
import { Button, ConfirmationDialog } from "../../UI";

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
  const [openDialog, setOpenDialog] = useState({
    updateValues: false,
    halfTime: false,
    fullTime: false,
  });

  const [dataFromButton, setDataFromButton] = useState({
    scoreType: null,
    team: null,
    valueToAdd: null,
    intervalButton: null,
  });

  const [gameInterval, setGameInterval] = useState({
    isHalfTime: false,
    isFullTime: false,
  });

  function handleLiveUpdateButtons(scoreType, team, valueToAdd) {
    setOpenDialog({ ...openDialog, updateValues: true });
    setDataFromButton({
      ...dataFromButton,
      scoreType,
      team,
      valueToAdd,
    });
  }

  function closeConfirmationMessage(value) {
    setOpenDialog({ ...openDialog, [value]: false });
  }

  function updateValue() {
    const { scoreType, team, valueToAdd } = dataFromButton;
    const newValues = matchStats?.map((item) => {
      if (item.type === scoreType) {
        return { ...item, [team]: item[team] + valueToAdd };
      }
      return item;
    });

    setMatchStats(newValues);
    closeConfirmationMessage("updateValues");
  }

  const endHalfTime = () => {
    setGameInterval({
      ...gameInterval,
      isHalfTime: true,
    });

    closeConfirmationMessage("halfTime");
  };
  const endMatch = () => {
    console.log("match has ended");
    console.log(matchStats);
    closeConfirmationMessage("fullTime");
  };
  return (
    <div className="w-[95%] lg:w-[60%] mx-auto min-h-screen pb-[5rem]">
      <div className=" mx-auto">
        <ScoreBoard scoreBoardData={matchStats[0]} />
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
          value="HT"
          disabled={gameInterval.isHalfTime}
          onClick={() => setOpenDialog({ ...openDialog, halfTime: true })}
        />
        <Button
          value="FT"
          onClick={() => setOpenDialog({...openDialog, fullTime: true})}
          disabled={gameInterval.isFullTime}
        />
      </div>

      {openDialog.updateValues && (
        <ConfirmationDialog
          handleDialog={() => closeConfirmationMessage("updateValues")}
          handleUpdate={updateValue}
          message="Are You sure to update Values?"
        />
      )}
      {openDialog.halfTime && (
        <ConfirmationDialog
          handleDialog={() => closeConfirmationMessage("halfTime")}
          handleUpdate={endHalfTime}
          message="End Half Time?"
        />
      )}
      {openDialog.fullTime && (
        <ConfirmationDialog
          handleDialog={() => closeConfirmationMessage("halfTimeFullTime")}
          handleUpdate={endMatch}
          message="End Match?"
        />
      )}
    </div>
  );
}
