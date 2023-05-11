import React from "react";
import { getFormation } from "../../functions/getFormation";
import { useTeamData } from "../../context/MyTeamData";

function PlayerCard({player}) {
  return (
    <div className="flex flex-col flex-1 items-center">
      <div className="h-[1.8rem]  w-[1.8rem] md:h-[2.5rem] md:w-[2.5rem] rounded-full bg-black text-white flex items-center justify-center z-20">
        {player.num}
      </div>
      <p className="text-[.8rem] lg:text-lg z-10">{player.name}</p>
    </div>
  );
}

function PlayersContainer({players, lightGreen}){
  return (
<div className={` ${lightGreen? "bg-pitch-light-green": "bg-pitch-dark-green"} min-h-[5rem] min-w-full flex items-center `}>
  {players?.map((item)=>{
    return <PlayerCard key={item.id} player={item}/>
  })}
</div>
  )

}

export default function PitchView({players}) {
const {teamLineUp, teamFormation} = useTeamData()
  const allFormations = getFormation(teamLineUp)
const filteredFormation = allFormations?.filter((item)=>item.name === teamFormation)
  const {name, formation} = filteredFormation[0]
console.log(formation);
  const {gk,df,mf,fw} = formation



  return (
    <div className="bg-pitch-light-green p-4 relative">
      <div className="min-w-full border-2 border-white relative overflow-hidden">
       <PlayersContainer players={gk} lightGreen = {true}/>
       <PlayersContainer players={df}/>
       <PlayersContainer players={mf} lightGreen={true}/>
       <PlayersContainer players={fw}/>


      
       

      

          {/* corner flags */}
        <div className="min-w-[2rem] min-h-[2rem] absolute -top-3 -left-3 border-2 border-white rounded-full"></div>
        <div className="min-w-[2rem] min-h-[2rem] absolute -top-3 -right-3 border-2 border-white rounded-full"></div>
        {/* goal post */}
        <div className="absolute min-w-[40%] lg:min-w-[20%] min-h-[20%] border-2 border-white -top-1 left-[50%] translate-x-[-50%]"></div>
        <div className="absolute min-w-[20%] lg:min-w-[10%] min-h-[10%] border-2 border-white -top-1 left-[50%] translate-x-[-50%]"></div>
{/* center circle */}
        <div className="absolute min-w-[4rem] min-h-[4rem] circle border-2 border-white rounded-full -bottom-12 left-[50%] translate-x-[-50%]"></div>
      </div>
    </div>
  );
}
