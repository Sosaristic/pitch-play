import React from 'react'
import { useNewTeamData } from '../../../context/CreateTeamData';
import SquadList from './SquadList'

export default function TeamSquad() {
   const {teamLineUp} = useNewTeamData()
  return (
    <main>
        <div className="flex items-center ">
        <h2 className="w-fit bg-primary p-2 rounded-bl-xl rounded-br-xl font-bold mt-4 ">
          Add Players
        </h2>
        <p className="w-fit bg-primary p-2 rounded-bl-xl rounded-br-xl font-bold mt-4 ml-auto">
          {teamLineUp.length} Players
        </p>
      </div>
      <section>
        <SquadList teamContext={useNewTeamData}/>
      </section>
    </main>
  )
}
