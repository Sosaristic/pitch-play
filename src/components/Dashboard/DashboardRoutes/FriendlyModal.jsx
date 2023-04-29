import React, { useState, forwardRef } from "react";
import { TextField } from "../../Form";
import { regEx } from "../../Form/regex";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TeamSelector } from "../../UI";

export default function FriendlyModal() {
    const CustomInput = forwardRef(({ value, onClick }, ref) => (
        <button type="button" className="border  px-4 py-2 rounded-sm" onClick={onClick} ref={ref}>
          {value}
        </button>
      ));


  const [formValues, setFormValues] = useState({
    refree: "",
    matchDate: new Date(),
    matchVenue: "",
    homeTeam: "",
    awayTeam: "",
  });

  function onChange(e) {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }
  return (
    <div>
      <div className="text-center text-[1.2rem] font-jost bg-primary px-6 py-1 text-white w-fit mx-auto rounded-bl-full rounded-tr-full ">
        Enter Match Details
      </div>
      <form className="px-4 flex flex-col gap-4">
        <div>
          <TextField
            label="Refree"
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
            <label htmlFor="date-picker" className="text-gray-500">Match Time & Date</label>
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

        <TeamSelector />
      </form>
    </div>
  );
}
