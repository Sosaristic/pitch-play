import React, { useState} from 'react'
import {PitchView} from "../../UI"
import { useTeamData } from '../../../context/MyTeamData'

const formations = [
  {id: 1, formationName: "442"},
  {id: 2, formationName: "433"},
  {id: 3, formationName: "4213"},
  {id: 4, formationName: "4123"},
  {id: 5, formationName: "4132"},
  {id: 6, formationName: "4231"},
  {id: 7, formationName: "4321"},
  {id: 8, formationName: "451"},
  {id: 9, formationName: "4141"},
  {id: 10, formationName: "4222"},
  {id: 11, formationName: "343"},
  {id: 12, formationName: "352"},
  {id: 13, formationName: "3412"},
  {id: 14, formationName: "3421"},
  {id: 15, formationName: "541"},



]

function FormationCard({values, activeIndex, handleActiveIndex}){

  return <button className={` text-center py-1 tracking-[.5rem] lg:tracking-[1rem] text-[.8rem] w-[27%] lg:w-1/6 rounded-2xl border-2 lg:hover:bg-hover
   lg:hover:border-hover font-[600] ${activeIndex === values.id?  "bg-primary border-primary" : "bg-gray border-gray-500"}`}
   onClick={()=>handleActiveIndex(values.id, values.formationName)}
   >
{values.formationName}
  </button>
}


export default function TeamFormation() {
  const {handleTeamFormation} = useTeamData()
  
  const [activeChip, setActiveChip] = useState(1)
  
const handleActiveIndex = (id, formationName)=>{
setActiveChip(id)
handleTeamFormation(formationName)

}

  return (
    <div>
      <h1 className="text-lg mt-2 font-bold">Team Formation</h1>
      <div><PitchView /></div>
      <div className='mt-4'>
        <p className='w-fit bg-primary p-2 rounded-bl-xl rounded-br-xl font-bold'>Select Formation</p>
      </div>
      <div className='flex flex-wrap gap-4 justify-center  mt-4'>
      {formations?.map((item)=>{
        return <FormationCard key={item.id} values = {item} activeIndex={activeChip} handleActiveIndex={handleActiveIndex}/>
      })}
      </div>
    </div>
  )
}
