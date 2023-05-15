import React, { useState, useEffect } from "react";
import { PopOver } from "../../UI";
import { TextField, Select } from "../../Form";
import { regEx } from "../../Form/regex";
import { useTeamData } from "../../../context/MyTeamData";

const position = [
  { id: 1, name: "GoalKeeper" },
  { id: 2, name: "Defender" },
  { id: 3, name: "Midfielder" },
  { id: 4, name: "Forward" },
];

export default function EditPlayerDetails({closeAddPlayerModal}) {
  const { teamLineUp } = useTeamData();

  const [formValues, setFormValues] = useState({
    playerName: "",
    playerNumber: "",
  });

  useEffect(() => {
    checkNumberAvailability();
  }, [formValues]);

  const [selectValue, setSelectValue] = useState(position[0]);
  const [numberTaken, setNumberTaken] = useState(false);

  const handleOnChange = ({ target: { name, value } }) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSelectValue = (e) => {
    setSelectValue(e);
  };

  function checkNumberAvailability() {
    console.log(formValues.playerNumber);
    const isNumberExist = teamLineUp.some((item) => item.num == formValues.playerNumber);
    if (isNumberExist && formValues.playerNumber !== "") {
      setNumberTaken(true);
    } else {
      setNumberTaken(false);
    }
  }
  return (
    <PopOver>
      <form className=" min-h-[10rem] text-black max-h-fit flex flex-col w-[90%] lg:w-[40%] py-3  bg-white rounded-md relative px-4">
        <p className="mt-2 self-center bg-primary text-white px-4 py-2 rounded-bl-2xl rounded-tr-2xl">Player Details</p>
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
        <div className="flex items-end gap-2 items-end mt-2">
          <div className="flex-1">
            <Select
              listData={position}
              value={selectValue}
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
            />
          </div>
        </div>
        
          <p className={`text-black self-end mr-4 text-[.8rem] ${numberTaken? "visible" : "invisible"} text-red-500`}>number already taken</p>
        

        <div className="flex justify-end mt-4 gap-4">
          <button type="button" className="border border-primary rounded-lg px-4 py-1 text-primary hover:bg-hover hover:text-white" onClick={closeAddPlayerModal}>Cancel</button>
          <button type="button" className="border border-primary bg-primary text-white rounded-lg px-4 py-1 hover:border-hover" onClick={closeAddPlayerModal}>Submit</button>
        </div>
      </form>
    </PopOver>
  );
}
