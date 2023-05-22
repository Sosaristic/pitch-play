import React from "react";
import { useNewTeamData } from "../../../context/CreateTeamData";
import SquadList from "./SquadList";
import { BsArrowLeft } from "react-icons/bs";

export default function TeamSquad({ handlePrev, handleFinish }) {
  const { teamLineUp, setShowNotification } = useNewTeamData();

  const handleSecondForm = () => {
    if (teamLineUp.length >= 11) {
      handleFinish();
    }
    else{
      setShowNotification(true)
    }
  };
  return (
    <main className="flex flex-col relative">
      <div className="flex items-center ">
        <h2 className="w-fit bg-primary p-2 rounded-bl-xl rounded-br-xl font-bold mt-4 ">
          Add Players
        </h2>
        <p className="w-fit bg-primary p-2 rounded-bl-xl rounded-br-xl font-bold mt-4 ml-auto">
          {teamLineUp.length} Players
        </p>
      </div>
      <section>
        <SquadList teamContext={useNewTeamData} />
      </section>
      <div className="flex justify-center gap-4 mt-4">
        <button
          type="button"
          className="flex gap-2 items-center bg-primary px-4 rounded-sm h-[3rem]"
          onClick={handlePrev}
        >
          Back{" "}
          <span className="text-[1.2rem]">
            <BsArrowLeft />
          </span>
        </button>
        <button
          type="button"
          className="flex gap-2 items-center bg-primary px-4 rounded-sm lg:h-[3rem]"
          onClick={handleSecondForm}
        >
          Finish
        </button>
      </div>
    </main>
  );
}
