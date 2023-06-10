import React, { useState } from "react";
import { useTeamData } from "../../../context/MyTeamData";
import SquadList from "./SquadList";
import { Button } from "../../UI";
import { IoMdPersonAdd } from "react-icons/io";

export default function TeamSquad() {
  const { teamLineUp } = useTeamData();
  const [showAddPlayersModal, setShowAddPlayersModal] = useState(false);
  return (
    <main>
      <div className="flex items-center ">
        <h2 className="w-fit bg-primary p-2 rounded-bl-xl rounded-br-xl font-bold mt-4 ">
          {teamLineUp.length} Players
        </h2>
        <div className="ml-auto">
          <Button type="button" value="Add" startIcon={<IoMdPersonAdd />} onClick={()=>setShowAddPlayersModal(true)}/>
        </div>
      </div>
      <section>
        <SquadList
          teamContext={useTeamData}
          setMinTeamLength={true}
          showAddPlayersModal={showAddPlayersModal}
          setShowAddPlayersModal={setShowAddPlayersModal}
        />
      </section>
    </main>
  );
}
