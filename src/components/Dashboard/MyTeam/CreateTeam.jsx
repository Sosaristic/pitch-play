import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CreateTeamForm1, CreateTeamForm2 } from "../../Dashboard";
import { useNewTeamData } from "../../../context/CreateTeamData";

export default function CreateTeam() {
  const navigate = useNavigate()
    const {teamLineUp,} = useNewTeamData()
    const firstFormValues = useRef()
  const [steps, setSteps] = useState(1);
  

 

  const handlePrev = ()=>{
    setSteps(prev=>prev-1)
  }
  const handleFirstForm = (formVales)=>{
firstFormValues.current = formVales
setSteps(prev=>prev + 1)
  }
  const handleFinish = ()=>{
console.log(teamLineUp);
console.log(firstFormValues);
navigate("/dashboard/my-team", {replace: true})
  }
  return (
    <div className="px-4 pb-[7rem] pt-[2rem]">
      <div>
        {steps === 1 && (
          <div>
            <CreateTeamForm1 handleFormOneSubmit={handleFirstForm} />
          </div>
        )}
        {steps === 2 && (
          <div>
            <CreateTeamForm2 handlePrev={handlePrev} handleFinish ={handleFinish} />
          </div>
        )}
       
      </div>
    </div>
  );
}
