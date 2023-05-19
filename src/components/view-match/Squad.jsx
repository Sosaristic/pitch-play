import React from 'react'
import { IoMdShirt } from "react-icons/io";

function List({ name, position, number }) {
    return (
      <ul>
        <li className="flex items-center gap-4 border-b-[1px] border-grey py-2">
          <div className="text-[1.5rem] lg:text-[2rem]">
            <IoMdShirt />
          </div>
          <div>
            <div className="font-bold">{name}</div> <div className="text-[.8rem]">{position}</div>
          </div>
        </li>
      </ul>
    );
  }

export default function Squad({squad, team}) {
  return (
    <div className="w-full sm:w-1/2">
          <p className="font-bold border-b-[1px] border-primary text-primary w-fit px-2 py-1">
            {team}
          </p>
          {squad.map((item) => {
            const { id, name, position, number } = item;
            return <List key={id} name={name} position={position} number={number} />;
          })}
        </div>
  )
}
