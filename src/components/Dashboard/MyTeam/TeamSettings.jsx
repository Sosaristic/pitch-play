import React, {useState} from "react";
import { IoMdShirt } from "react-icons/io";
import { regEx } from "../../Form/regex";

import { TextField } from "../../Form";
import { Button } from "../../UI";

export default function TeamSettings() {
const [teamData, setTeamData] = useState({
  teamName: "Manchester United",
  teamManager: "Anderson",
  firstColor: "#8a2be2",
  secondColor: "#a52a2a",
  thirdColor: "#00008b"
})

const colorDetails = [
  { id: 1, title: "Home Jersey", name: "firstColor", value:  teamData.firstColor},
  { id: 2, title: "Away Jersey", name: "secondColor", value: teamData.secondColor},
  { id: 3, title: "Third Jersey", name: "thirdColor", value: teamData.thirdColor},
]

const handleInputChange = ({target: {name, value}})=>{
setTeamData({
  ...teamData,
  [name] : value
})
}

const handleSubmit = (e)=>{
e.preventDefault()
console.log(teamData);
}
  return (
    <div className="relative">
      <h2 className="w-fit bg-primary p-2 rounded-bl-xl rounded-br-xl font-bold mt-4 ">
        Team Settings
      </h2>

      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4 items-center md:w-[70%] lg:w-[60%] font-poppins mx-auto text-gray-300">
        <div className="w-full">
          <TextField label="Team Name" value={teamData.teamName} name="teamName" onChange={handleInputChange} regex={regEx.name}/>
        </div>
        <div className="w-full">
          <TextField label="Manager Name" value={teamData.teamManager} name="teamManager" onChange={handleInputChange} regex={regEx.name}/>
        </div>
        <div className="w-full">
          <p className="font-[900] mt-2 mb-2">Choose Team Colors</p>
          <div className="flex justify-between">
            {colorDetails?.map((item) => {
              return (
                <div key={item.id} className="flex flex-col items-center gap-2">
                  <p className="text-center text-[.8rem] md:text-[1rem]">{item.title}</p>
                  <div className={`text-[5rem] outline-none border-none`} style={{color: item.value}}>
                    <IoMdShirt />
                  </div>
                  <div>
                    <input type="color" name={item.name} id={item.id} value={item.value} onChange={handleInputChange}/>
                  </div>
                </div>
              );
            })}

          
          </div>
        </div>

        <button type="submit" className="text-[1.2rem] mt-8 bg-primary rounded-lg px-6 py-1 transition-colors duration-300 lg:hover:bg-hover ">Save</button>
      </form>
    </div>
  );
}
