import React, { useState } from "react";
import { getFormation } from "../../functions/getFormation";
import { useTeamData } from "../../context/MyTeamData";

export function PlayerCard({ player, handlePlayerClick, isSwapping = false }) {
  return (
    <div className="flex flex-col flex-1 items-center capitalize relative cursor-default">
      {isSwapping ? (
        <div
          className={`flex flex-col items-center rounded-sm px-[3px] z-50
capitalize relative cursor-default ${
            player.swapColor ? "bg-[#deb887]" : "bg-[#a52a2a]"
          } shadow-lg shadow-[#333]`}
          onClick={() => handlePlayerClick(player.id)}
        >
          <div className="h-[1.8rem] relative   w-[1.8rem] md:h-[2.5rem] md:w-[2.5rem] rounded-full bg-black text-white flex items-center justify-center font-[600 capitalize] z-20">
            {player.num}
            {player.isCaptain && (
              <div className="absolute flex items-center justify-center rounded-full p-3  -top-3 -right-4  bg-black w-[.4rem] h-[.4rem] lg:w-[1rem] lg:h-[1rem] font-extrabold font-righteous vs:text-[.6rem] sm:text-[.8rem]">
                C
              </div>
            )}
          </div>
          <p className="text-[.6rem] md:text-[.7rem] lg:text-lg z-10">{player.name}</p>
        </div>
      ) : (
        <div
          className={`flex flex-col items-center rounded-sm px-[3px] 
 capitalize relative cursor-default`}
          onClick={() => handlePlayerClick(player.id)}
        >
          <div className="h-[1.8rem] relative   w-[1.8rem] md:h-[2.5rem] md:w-[2.5rem] rounded-full bg-black text-white flex items-center justify-center font-[600 capitalize] z-20">
            {player.num}
            {player.isCaptain && (
              <div className="absolute flex items-center justify-center rounded-full p-3  -top-3 -right-4  bg-black w-[.4rem] h-[.4rem] lg:w-[1rem] lg:h-[1rem] font-extrabold font-righteous vs:text-[.6rem] sm:text-[.8rem]">
                C
              </div>
            )}
          </div>
          <p className="text-[.6rem] md:text-[.7rem] lg:text-lg z-10">{player.name}</p>
        </div>
      )}
    </div>
  );
}

function PlayersContainer({ players, lightGreen, handlePlayerClick, isSwapping }) {
  return (
    <div
      className={` ${
        lightGreen ? "bg-pitch-light-green" : "bg-pitch-dark-green"
      } min-h-[5rem] min-w-full flex items-center justify-between `}
    >
      {players?.map((item) => {
        return (
          <PlayerCard
            key={item.id}
            player={item}
            handlePlayerClick={handlePlayerClick}
            isSwapping={isSwapping}
          />
        );
      })}
    </div>
  );
}

export default function PitchView({ players, handlePlayerClick, isSwapping }) {
  const { teamLineUp, teamFormation } = useTeamData();
  const allFormations = getFormation(teamLineUp);
  const filteredFormation = allFormations?.filter((item) => item.name === teamFormation);
  const { name, formation } = filteredFormation[0];
  const { gk, df, mf, am, fw } = formation;

  return (
    <div className="bg-pitch-light-green p-2 pt-6 relative">
      <p className="absolute text-white top-0 left-5 font-bold tracking-[.5rem]">{name}</p>

      <div className="min-w-full border-2 border-white relative overflow-hidden">
        <PlayersContainer
          players={gk}
          lightGreen={true}
          handlePlayerClick={handlePlayerClick}
          isSwapping={isSwapping}
        />
        <PlayersContainer
          players={df}
          handlePlayerClick={handlePlayerClick}
          isSwapping={isSwapping}
        />
        <PlayersContainer
          players={mf}
          lightGreen={true}
          handlePlayerClick={handlePlayerClick}
          isSwapping={isSwapping}
        />
        {am != null && (
          <PlayersContainer
            players={am}
            handlePlayerClick={handlePlayerClick}
            isSwapping={isSwapping}
          />
        )}
        <PlayersContainer
          players={fw}
          lightGreen={am == null ? false : true}
          handlePlayerClick={handlePlayerClick}
          isSwapping={isSwapping}
        />

        {/* corner flags */}
        <div className="min-w-[2rem] min-h-[2rem] absolute -top-3 -left-3 border-2 border-white rounded-full"></div>
        <div className="min-w-[2rem] min-h-[2rem] absolute -top-3 -right-3 border-2 border-white rounded-full"></div>
        {/* goal post */}
        <div
          className={`absolute min-w-[40%] lg:min-w-[20%]  ${
            am == null ? "min-h-[25%]" : "min-h-[20%]"
          } border-2 border-white -top-1 left-[50%] translate-x-[-50%]`}
        ></div>
        <div className="absolute min-w-[20%] lg:min-w-[10%] min-h-[10%] border-2 border-white -top-1 left-[50%] translate-x-[-50%]"></div>
        {/* center circle */}
        <div className="absolute min-w-[4rem] min-h-[4rem] circle border-2 border-white rounded-full -bottom-12 left-[50%] translate-x-[-50%]"></div>
      </div>
    </div>
  );
}
