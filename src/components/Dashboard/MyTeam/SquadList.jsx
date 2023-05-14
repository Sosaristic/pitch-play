import React from 'react'
import { useTeamData } from '../../../context/MyTeamData'

export default function SquadList() {
  const {teamPlayers }= useTeamData()
  console.log(teamPlayers);
  return (
    <div>SquadList</div>
  )
}
