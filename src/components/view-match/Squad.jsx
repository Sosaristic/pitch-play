import React from "react";
import { IoMdShirt } from "react-icons/io";
import { PitchView } from "../UI";
import { useTeamPlayers } from "../../hooks/useTeamPlayers";

function List({ name, pos, num }) {
  return (
    <ul>
      <li className="flex items-center gap-4 py-2 min-w-[8rem] max-w-[8rem]">
        <div className="flex items-center justify-center w-[3rem] h-[3rem] text-white rounded-full bg-black">
          {num}
        </div>
        <div>
          <div className="font-bold capitalize">{name}</div>{" "}
          <div className="text-[.8rem]">{pos}</div>
        </div>
      </li>
    </ul>
  );
}

export default function Squad({lineUp, subs, formation, manager }) {
  

  return (
    <div className="w-full mt-2">
      <div>
        <PitchView teamLineUp={lineUp} teamFormation={formation} />
      </div>
      <p className="bg-primary w-fit h-[2rem] px-4 py-1 mt-2 flex items-center justify-center rounded-bl-xl rounded-br-xl">
        Substitutes
      </p>

      <div className="flex flex-wrap justify-start gap-2 md:gap-x-4 px-2">
        {subs.map((item) => {
          const { id, name, pos, num } = item;
          return <List key={id} name={name} pos={pos} num={num} />;
        })}
      </div>
      <p className="bg-primary w-fit h-[2rem] px-4 py-1 mt-2 flex items-center justify-center rounded-bl-xl rounded-br-xl">
        Manager
      </p>
      <p className="capitalize font-inter text-[1.2rem]">{manager}</p>
    </div>
  );
}
