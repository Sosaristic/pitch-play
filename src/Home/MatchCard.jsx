import React from "react";
import { IoMdShirt } from "react-icons/io";
import {FaChevronRight} from "react-icons/fa"
export default function MatchCard({ data }) {
  const { time, home, away } = data;
  const { homeName, homeScore, homeColor } = home;
  const { awayName, awayScore, awayColor } = away;

  return (
    <div className="flex flex-col gap-4 relative p-4 ">
      <p className="font-[500] flex pr-2">
        Friendly Match <button className="ml-auto"><FaChevronRight /></button>
      </p>
      <div className="flex items-center text-[1rem] rounded-lg p-6 gap-4 font-bold border-l-[6px] border-primary  bg-grey">
        <div>{time}'</div>
        <div className="flex flex-1 flex-col justify-between text-[1rem] rounded-lg gap-4 font-bold">
          <div className="basis-[40%] flex items-center gap-2">
            <span>
              <IoMdShirt color={homeColor} size="1.8rem"/>
            </span>{" "}
            {homeName} <span className="ml-auto">{homeScore}</span>
          </div>
          <div className="basis-[40%] flex items-center gap-2">
            <span>
              <IoMdShirt color={awayColor} size="1.8rem"/>
            </span>
            {awayName} <span className="ml-auto">{awayScore}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
