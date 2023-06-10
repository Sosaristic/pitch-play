import React, { useState } from "react";
import { useFormik } from "formik";

import { IoMdShirt } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import { regEx } from "../../Form/regex";

import { TextField } from "../../Form";
import { Button } from "../../UI";
import { teamDetailsSchema } from "../../Form/schemaValidation";

export default function CreateTeamForm1({ handleFormOneSubmit }) {
  const [teamColors, setTeamColors] = useState({
    
    firstColor: "#8a2be2",
    secondColor: "#a52a2a",
    thirdColor: "#00008b",
  });

  const formik = useFormik({
    initialValues: {
      teamName: "Manchester United",
      teamManager: "Anderson",
     
    },
    validationSchema: teamDetailsSchema,
    onSubmit: (values) => {
      const teamData = {...values, ...teamColors}
      handleFormOneSubmit(teamColors);

    },
  });



  const colorDetails = [
    { id: 1, title: "Home Jersey", name: "firstColor", value: teamColors.firstColor },
    { id: 2, title: "Away Jersey", name: "secondColor", value: teamColors.secondColor },
    { id: 3, title: "Third Jersey", name: "thirdColor", value: teamColors.thirdColor },
  ];

  const handleInputChange = ({ target: { name, value } }) => {
    setTeamColors({
      ...teamColors,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormOneSubmit(teamColors);
  };

  return (
    <div>
      <div className="relative">
        <h2 className="w-fit bg-primary p-2 rounded-bl-xl rounded-br-xl font-bold mt-4 ">
          Team Details
        </h2>

        <form
          onSubmit={formik.handleSubmit}
          className="mt-4 flex flex-col gap-4 items-center md:w-[70%] lg:w-[60%] font-poppins mx-auto text-gray-300"
        >
          <div className="w-full">
          <TextField
            label="Team Name"
            id="team-name"
            name="teamName"
            value={formik.values.teamName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMsg={formik.errors.teamName}
          />
          </div>
          <div className="w-full">
          <TextField
            label="Manager Name"
            name="teamManager"
            id="team-manager"
            value={formik.values.teamManager}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMsg={formik.errors.teamManager}
          />
          </div>
          <div className="w-full">
            <p className="font-[900] mt-2 mb-2">Choose Team Colors</p>
            <div className="flex justify-between">
              {colorDetails?.map((item) => {
                return (
                  <div key={item.id} className="flex flex-col items-center gap-2">
                    <p className="text-center text-[.8rem] md:text-[1rem]">{item.title}</p>
                    <div
                      className={`text-[5rem] outline-none border-none`}
                      style={{ color: item.value }}
                    >
                      <IoMdShirt />
                    </div>
                    <div>
                      <input
                        type="color"
                        name={item.name}
                        id={item.id}
                        value={item.value}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

         <div><Button type="submit" endIcon={<BsArrowRight />} disabled={formik.errors.teamManager || formik.errors.teamName} value="Next"/></div>
        </form>
      </div>
    </div>
  );
}
