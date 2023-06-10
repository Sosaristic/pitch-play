import React, { useState } from "react";
import { IoMdShirt } from "react-icons/io";
import { useFormik } from "formik";
import { TextField } from "../../Form";
import { teamDetailsSchema } from "../../Form/schemaValidation";
import {Button} from "../../UI"


export default function TeamSettings() {
  const [teamColors, setteamColors] = useState({
   
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
      const teamSettingsData = {...values, ...teamColors}
      console.log(teamSettingsData);
    },
  });

  const colorDetails = [
    { id: 1, title: "Home Jersey", name: "firstColor", value: teamColors.firstColor },
    { id: 2, title: "Away Jersey", name: "secondColor", value: teamColors.secondColor },
    { id: 3, title: "Third Jersey", name: "thirdColor", value: teamColors.thirdColor },
  ];

  

  

  const handleInputChange = ({ target: { name, value } }) => {
    setteamColors({
      ...teamColors,
      [name]: value,
    });
  };

 
  return (
    <div className="relative mt-2">
      <h2 className="w-fit bg-primary p-2 rounded-bl-xl rounded-br-xl font-bold">Team Settings</h2>

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

       <div className="w-full lg:w-1/2"><Button type="submit" value="Save" /></div>
      </form>
    </div>
  );
}
