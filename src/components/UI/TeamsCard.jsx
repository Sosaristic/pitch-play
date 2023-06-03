import React from "react";
import { IoMdShirt } from "react-icons/io";
import { MdStadium, MdCalendarMonth } from "react-icons/md";
import {BsClock} from "react-icons/bs"
import VS from "../../assets/svg/VS.svg"

export default function TeamsCard({ handleMatchCard, id, fixture, matchData }) {
  const { homeName, matchId, awayName, homeScore, awayScore, stadium, date, matchType } = matchData || {};
  return (
    <div
      className="flex w-full mx-auto max-h-[10rem] min-h-[10rem] text-gray-300 flex-col teams-card rounded-md px-4 font-poppins py-2 pb-4"
      onClick={() => handleMatchCard(matchId)}
    >
      <p className="text-center text-[.8rem] capitalize">{matchType}</p>
      <div className="flex flex-1 items-center gap-2">
        <div className="flex items-center w-2/5 flex-col flex-2">
          <div className="text-[2rem] text-[red]">
            <IoMdShirt />
          </div>
          <p className="text-[.8rem] text-center">{homeName}</p>
        </div>
        <div className="1/5 flex-1 text-center flex flex-col">
          {fixture ? (
            <div className="flex flex-col items-center text-[.8rem]">
              <img src={VS} alt="" />
              <div className="flex items-center gap-1"><span><BsClock /></span> 4:30pm</div>
            </div>
          ) : (
            <div>
              <div>
                <span>{homeScore}</span> : <span>{awayScore}</span>
                <p className="text-[.7rem]">Full Time</p>
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center w-2/5 flex-col text-center">
          <div className="text-[2rem] flex-2">
            <IoMdShirt />
          </div>
          <p className="text-[.8rem] text-center">{awayName}</p>
        </div>
      </div>
      <div className="flex text-[.7rem]">
        <div className="flex items-center gap-2">
          <span className="text-[1.2rem]">
            <MdStadium />
          </span>{" "}
          {stadium}
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="text-[1.2rem]">
            <MdCalendarMonth />
          </span>
          {date}
        </div>
      </div>
    </div>
  );
}
