import React, {useState} from "react";
import { useNewTeamData } from "../../../context/CreateTeamData";
import SquadList from "./SquadList";
import { BsArrowLeft } from "react-icons/bs";
import { Button } from "../../UI";
import { IoMdPersonAdd } from "react-icons/io";

export default function TeamSquad({ handlePrev, handleFinish }) {
  const { teamLineUp, setShowNotification } = useNewTeamData();
  const [showAddPlayersModal, setShowAddPlayersModal] = useState(false);


  const handleSecondForm = () => {
    if (teamLineUp.length >= 11) {
      handleFinish();
    } else {
      setShowNotification(true);
    }
  };
  return (
    <main className="flex flex-col relative">
      <div className="flex items-center ">
        <p className="w-fit bg-primary p-2 rounded-bl-xl rounded-br-xl font-bold mt-4 ">
          {teamLineUp.length} Players
        </p>
        <div className="ml-auto">
          <Button
            type="button"
            value="Add"
            startIcon={<IoMdPersonAdd />}
            onClick={() => setShowAddPlayersModal(true)}
          />
        </div>
      </div>
      <section>
        <SquadList
          teamContext={useNewTeamData}
          showAddPlayersModal={showAddPlayersModal}
          setShowAddPlayersModal={setShowAddPlayersModal}
        />
      </section>
      <div className="flex justify-center gap-4 mt-4">
       <div><Button type="button" startIcon={<BsArrowLeft />} value="Prev" onClick={handlePrev}/></div>
       <div><Button type="button" value="Finish" onClick={handleSecondForm}/></div>
      </div>
    </main>
  );
}
