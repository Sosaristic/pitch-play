import React from "react";
import { useTeamData } from "../../../context/MyTeamData";
import SquadList from "./SquadList";

export default function TeamSquad() {
  const { teamLineUp } = useTeamData();
  return (
    <main>
      <div className="flex items-center ">
        <h2 className="w-fit bg-primary p-2 rounded-bl-xl rounded-br-xl font-bold mt-4 ">
          Manage Squad
        </h2>
        <p className="w-fit bg-primary p-2 rounded-bl-xl rounded-br-xl font-bold mt-4 ml-auto">
          {teamLineUp.length} Players
        </p>
      </div>
      <section>
        <SquadList teamContext={useTeamData} setMinTeamLength={true} />
      </section>
    </main>
  );
}
