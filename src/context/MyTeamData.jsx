import React, {createContext, useContext, useState} from 'react'
import { homePlayers } from '../components/UI/UIData'

const TeamDataContext = createContext()
export function MyTeamDataProvider({children}) {
const [teamLineUp, setTeamLineUp] = useState(homePlayers)
const [teamFormation, setTeamFormation] = useState("442")


const handleTeamFormation = (formation)=>{
    setTeamFormation(formation)
}

const value = {teamLineUp, teamFormation, handleTeamFormation}
 return <TeamDataContext.Provider value={value}>
{children}
 </TeamDataContext.Provider>
}

export function useTeamData(){
const teamContext = useContext(TeamDataContext)
if(teamContext === undefined){
    throw new Error("useTeamData must be within a TeamDataProvider")
}
return teamContext

}


