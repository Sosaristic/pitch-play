import React, { useState, useEffect, useRef } from "react";
import { PopOver } from "../../UI";
import { TextField, Select } from "../../Form";
import { regEx } from "../../Form/regex";
import { useTeamData } from "../../../context/MyTeamData";
import { getPlayerDetails } from "../../../functions/helperFunctions";
import {TfiClose} from "react-icons/tfi"
import useClickAwayListener from "../../../hooks/useClickAway";


const position = [
  { id: 1, name: "GoalKeeper", value: "gk" },
  { id: 2, name: "Defender", value: "df" },
  { id: 3, name: "Midfielder", value: "mf" },
  { id: 4, name: "Forward", value: "fw" },
];

export default function EditPlayerDetails({ closeAddPlayerModal, playerId, isEditing }) {
const playerEditModalRef = useRef()
  useClickAwayListener(playerEditModalRef, closeAddPlayerModal)
  const { teamLineUp, editPlayersDetails } = useTeamData();
  const playerDetails = getPlayerDetails(playerId, teamLineUp);
  const [formValues, setFormValues] = useState({
    playerName: "",
    playerNumber: "",
  });
  const [selectPlayerPosition, setSelectPlayerPosition] = useState(position[0]);
  const [numberTaken, setNumberTaken] = useState(false);

  useEffect(() => {
    checkNumberAvailability();
  }, [formValues]);

  useEffect(() => {
    if (isEditing) {
      setFormValues({
        ...formValues,
        playerName: playerDetails.name,
        playerNumber: playerDetails.num,
      });
    }
  }, [isEditing]);

 

  const handleOnChange = ({ target: { name, value } }) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSelectValue = (e) => {
    setSelectPlayerPosition(e);
  };

  function checkNumberAvailability() {
    const playerDetails = getPlayerDetails(playerId, teamLineUp);
    if (isEditing) {
      const isNumberExist = teamLineUp.some(
        (player) =>
          player.num == formValues.playerNumber && formValues.playerNumber != playerDetails.num
      );
      if (isNumberExist && formValues.playerNumber !== "") {
        setNumberTaken(true);
      } else {
        setNumberTaken(false);
      }
    }
    else {
      const isNumberExist = teamLineUp.some((player)=>player.num == formValues.playerNumber)
      if (isNumberExist && formValues.playerNumber !== "") {
        setNumberTaken(true);
      } else {
        setNumberTaken(false);
      }
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
if(isEditing){
const editDetails = {
  ...formValues, position: selectPlayerPosition.value, playerId
}
editPlayersDetails(editDetails)
closeAddPlayerModal()
}
  }
  return (
    <PopOver>
      <form onSubmit={handleSubmit} ref={playerEditModalRef} className="player-details absolute bottom-[-50%] min-h-[10rem] text-black max-h-fit flex flex-col w-[90%] md:w-[60%] lg:w-[40%] py-3  bg-white rounded-md  px-4">
        <p className="mt-2 self-center bg-primary text-white px-4 py-2 rounded-bl-2xl rounded-tr-2xl">
          Player Details
        </p>
        <div className="mt-2">
          <TextField
            type="text"
            label="Player Name"
            name="playerName"
            value={formValues.playerName}
            onChange={handleOnChange}
            placeholder="Player name"
            id="player-name"
            regex={regEx.name}
            errorMsg="Invalid name"
          />
        </div>
        <div className="flex items-end gap-2 mt-2">
          <div className="flex-1">
            <Select
              listData={position}
              value={selectPlayerPosition}
              onChange={handleSelectValue}
              name="playerPosition"
            />
          </div>
          <div className="flex-1 h-full relative">
            <TextField
              value={formValues.playerNumber}
              placeholder="Number"
              name="playerNumber"
              onChange={handleOnChange}
              label="Number"
              type="number"
              regex={regEx.Number}
            />
          </div>
        </div>

        <p
          className={`text-black self-end mr-4 text-[.8rem] ${
            numberTaken ? "visible" : "invisible"
          } text-red-500`}
        >
          number already taken
        </p>

        <div className="flex justify-end mt-4 gap-4">
          <button
            type="button"
            className="border border-primary rounded-lg px-4 py-1 text-primary hover:bg-hover hover:text-white"
            onClick={closeAddPlayerModal}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled= {numberTaken || formValues.playerName == ""}
            className="border border-primary bg-primary disabled:bg-grey disabled:cursor-not-allowed text-white rounded-lg px-4 py-1 hover:border-hover"
            
          >
            Submit
          </button>
        </div>
        <div className="absolute text-[1.3rem] top-2 right-2" onClick={closeAddPlayerModal}><TfiClose arial-visibility="hidden"/></div>
      </form>
    </PopOver>
  );
}
