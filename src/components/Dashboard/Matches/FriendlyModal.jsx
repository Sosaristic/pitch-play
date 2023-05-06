import React, { useState, forwardRef } from "react";
import { regEx } from "../../Form/regex";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { TeamSelector } from "../../UI";
import { TextField } from "../../Form";
import VS from "../../../assets/svg/VS.svg";
import { department } from "../dashboardData";



 const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button type="button" className="border  px-4 py-2 rounded-sm" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));



export default function FriendlyModal({closeModal}) {
 

  const [formValues, setFormValues] = useState({
    refree: "",
    matchDate: new Date(),
    matchVenue: "",
    homeTeam: department[0].title,
    awayTeam: department[0].title,
  });

  function onChange(e) {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }
  const handleCarouselValues = (value, type)=>{
if(type == "first"){
  setFormValues({
    ...formValues,
    homeTeam: value
  })
}
else{
  setFormValues({
    ...formValues,
    awayTeam: value
  })
}
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(formValues);
    closeModal()
  }
  return (
    <div>
      <div className="text-center text-[1.2rem] font-jost bg-primary px-6 py-1 text-white w-fit mx-auto rounded-bl-full rounded-tr-full  ">
        Enter Match Details
      </div>
      <form onSubmit={handleSubmit} className="px-4 flex flex-col gap-4 mt-4 pb-4">
        <div>
          <TextField
            label="Match Official"
            placeholder="Refree Name"
            name="refree"
            errorMsg="Please enter a valid name"
            id="ref-name"
            regex={regEx.name}
            value={formValues.refree}
            onChange={onChange}
          />
        </div>

        <div>
          <TextField
            label="Venue"
            placeholder="match venue"
            name="matchVenue"
            errorMsg="enter a valid venue"
            regex={regEx.name}
            value={formValues.matchVenue}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="date-picker" className="text-gray-500">
            Match Time & Date
          </label>
          <DatePicker
            id="date-picker"
            selected={formValues.matchDate}
            onChange={(date) => {
              setFormValues({
                ...formValues,
                matchDate: date,
              });
            }}
            dateFormat="MM/dd/yyyy hh:mm aa"
            showTimeInput
            customInput={<CustomInput />}
          />
        </div>
        <label htmlFor="select-teams" className="text-center font-bold text-gray-500">
          Select Teams
        </label>
        <div
          id="select teams"
          className="w-full flex flex-col md:flex-row gap-2 items-center justify-center"
        >
          <TeamSelector handleCarouselValues={handleCarouselValues} type="first"/>
          <div className="self-center text-[2rem] font-righteous">
            <img src={VS} alt="" />
          </div>
          <TeamSelector handleCarouselValues={handleCarouselValues} type="second"/>
        </div>
        <div className="flex justify-end gap-4 my-4">
          <button
            type="button"
            className="text-[1.2rem] rounded-2xl border border-primary px-4 py-1 font-[600] text-primary lg:hover:bg-hover lg:hover:text-white"
          onClick={closeModal}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={formValues.refree == "" || formValues.matchVenue == "" }
            className="text-[1.2rem] bg-primary text-white rounded-2xl border-2 font-[600] border-primary px-4 py-1 lg:hover:bg-hover disabled:bg-gray-500 disabled:border-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
