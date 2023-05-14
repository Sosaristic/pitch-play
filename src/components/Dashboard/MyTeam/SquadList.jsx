import React from 'react'
import { useTeamData } from '../../../context/MyTeamData'

export default function SquadList() {
  const {teamPlayers }= useTeamData()
 
  return (
    <div>SquadList</div>
  )
}
