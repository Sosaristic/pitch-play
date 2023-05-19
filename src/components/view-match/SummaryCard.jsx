import React from "react";
import { MdRectangle } from "react-icons/md";
import { BiFootball } from "react-icons/bi";
import { GiWhistle } from "react-icons/gi";

export default function SummaryCard({ home, away, type }) {
    const {homeName, homeAction} = home || {}
    const {awayName, awayAction} = away ||  {}
  return (
    <div className="flex relative  mt-2">
        <div className="basis-[10%] flex-1">23</div>
      <div className="flex basis-[90%] flex-1">

        <div className="flex basis-2/5 flex-1 items-center font-jost gap-2">
          anderson
          <span className="text-[yellow]">
            <MdRectangle size={24}/>
          </span>
        </div>
        <div className="flex items-center basis-1/5 flex-1">4-2</div>
        <div className="flex basis-2/5 flex-1 items-center gap-2">
          <span className="text-[red] font-jost">
            <MdRectangle size={24}/>
          </span>
          Marcelo
        </div>
      </div>
    </div>
  );
}
