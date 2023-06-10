import React, { useState, useEffect, useRef, useId, } from "react";
import { Button, PopOver } from "../../UI";
import { TextField, Select } from "../../Form";
import { regEx } from "../../Form/regex";
import { useTeamData } from "../../../context/MyTeamData";
import { getPlayerDetails } from "../../../functions/helperFunctions";
import { TfiClose } from "react-icons/tfi";
import useClickAwayListener from "../../../hooks/useClickAway";
import { useFormik } from "formik";
import { editPlayerModalSchema } from "../../Form/schemaValidation";

const position = [
  { id: 1, name: "GoalKeeper", value: "gk" },
  { id: 2, name: "Defender", value: "df" },
  { id: 3, name: "Midfielder", value: "mf" },
  { id: 4, name: "Forward", value: "fw" },
];

export default function EditPlayerDetails({
  closeAddPlayerModal,
  playerId,
  isEditing,
  editPlayersDetails,
  addPlayer,
  lineUp,
}) {
  const playerDetails = getPlayerDetails(playerId, lineUp);
  const newInitialValues = {name: playerDetails.name, number: playerDetails.num}
   const playerEditModalRef = useRef();
  const id = useId();
  useClickAwayListener(playerEditModalRef, closeAddPlayerModal);
   const [selectPlayerPosition, setSelectPlayerPosition] = useState(position[0]);
  const [numberTaken, setNumberTaken] = useState(false);

  const formik = useFormik({
    initialValues: isEditing?  newInitialValues : {name: "", number: ""},
    validationSchema: editPlayerModalSchema,
    onSubmit: (values) => {

      const playerData = {
        name: values.name,
        num: values.number,
        id,
        pos: selectPlayerPosition.value
      }
      if(isEditing){
         const editDetails = {
        playerName: values.name,
        playerNumber: values.number,
        position: selectPlayerPosition.value,
        playerId,
      };
      editPlayersDetails(editDetails);
      closeAddPlayerModal();
      }
      else{
        addPlayer(playerData)
      }
      closeAddPlayerModal()

    },
  });


  useEffect(() => {
    checkNumberAvailability();
  }, [formik.values]);

 

  const handleSelectValue = (e) => {
    setSelectPlayerPosition(e);
  };

function handleNumberExists(numberExists){
 if (numberExists && formik.values.number !== "") {
        setNumberTaken(true);
      } else {
        setNumberTaken(false);
      }
}

  function checkNumberAvailability() {
    if (isEditing) {
      const isNumberExist = lineUp.some(
        (player) => player.num == formik.values.number && formik.values.number != playerDetails.num
      );
      handleNumberExists(isNumberExist)
    } else {
      const isNumberExist = lineUp.some((player) => player.num == formik.values.number);
     handleNumberExists(isNumberExist)
    }
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (isEditing) {
  //     const editDetails = {
  //       ...formValues,
  //       position: selectPlayerPosition.value,
  //       playerId,
  //     };
  //     editPlayersDetails(editDetails);
  //     closeAddPlayerModal();
  //   } else {
  //     const playerData = {
  //       name:formik.values.name,
  //       num:formik.values.number,
  //       id,
  //       pos: selectPlayerPosition.value,
  //     };
  //     addPlayer(playerData);
  //     closeAddPlayerModal();
  //   }
  // };
  return (
    <PopOver>
      <form
        onSubmit={formik.handleSubmit}
        ref={playerEditModalRef}
        className="player-details absolute bottom-[-50%] min-h-[10rem] text-black max-h-fit flex flex-col w-[90%] md:w-[60%] lg:w-[40%] py-3  bg-white rounded-md  px-4"
      >
        <p className="mt-2 self-center bg-primary text-white px-4 py-2 rounded-bl-2xl rounded-tr-2xl">
          Player Details
        </p>
        <div className="mt-2">
          <TextField
            type="text"
            label="Player Name"
            name="name"
            placeholder="Player name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMsg={formik.touched.name && formik.errors.name}
          />
        </div>
        <div className="flex items-center gap-2 mt-2 h-[4rem]">
          <div className="flex-1 mt-1">
            <Select
              listData={position}
              value={selectPlayerPosition}
              onChange={handleSelectValue}
              name="playerPosition"
            />
          </div>
          <div className="flex-1 h-full relative">
            <TextField
              placeholder="Number"
              name="number"
              label="Number"
              value={formik.values.number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMsg={formik.touched.number && formik.errors.number}
            />
          </div>
        </div>

        <p
          className={`text-black self-end mt-2 mr-4 text-[.8rem] ${
            numberTaken ? "visible" : "invisible"
          } text-red-500`}
        >
          number already taken
        </p>

        <div className="flex justify-end mt-4 gap-4">
          <div className="w-fit">
            <Button type="button" onClick={closeAddPlayerModal} value="Cancel" />
          </div>

          <div className="w-fit">
            <Button
              type="submit"
              value="Submit"
              disabled={numberTaken || formik.errors.name || formik.errors.number}
            />
          </div>
        </div>
        <div className="absolute text-[1.3rem] top-2 right-2" onClick={closeAddPlayerModal}>
          <TfiClose arial-visibility="hidden" />
        </div>
      </form>
    </PopOver>
  );
}
