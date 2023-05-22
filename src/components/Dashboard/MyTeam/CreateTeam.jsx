import React, { useState } from 'react'
import {CreateTeamForm1, CreateTeamForm2} from "../../Dashboard"

export default function CreateTeam() {
    const [steps, setSteps] = useState(1)
    const [teamData, setTeamData] = useState({
        firstForm: null,
        secondForm: null
    })

    const handleFormSubmit = (context, values)=>{
        if(context === "firstForm"){
            setTeamData({
                ...teamData, firstForm: values
            })
            setSteps(2)
        }

    }
  return (
    <div className='px-4 pb-[7rem]'>
       
        <div>
            {steps === 1 && <div><CreateTeamForm1 handleFormOneSubmit={handleFormSubmit}/></div>}
            {steps === 2 && <div><CreateTeamForm2 /></div>}
        </div>
    </div>
  )
}



