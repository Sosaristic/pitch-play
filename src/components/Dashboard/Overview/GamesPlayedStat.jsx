import React from "react";

const matchesResult = [
    { id: 1, result: "w" },
    { id: 2, result: "w" },
    { id: 3, result: "l" },
    { id: 4, result: "l" },
    { id: 5, result: "w" },
    { id: 6, result: "w" },
    { id: 7, result: "d" },
    { id: 8, result: "w" },
    { id: 9, result: "l" },



  ];
export default function GamesPlayedStat() {

function pieChart(){
let wins = 0, draws = 0, losses = 0;
matchesResult?.forEach((item)=>{
    item.result == "w" ? (wins += 1) : item.result == "d" ? (draws += 1) : (losses += 1);

})
const winDegree =Math.round( (wins / matchesResult.length) * 360  )
const lossDegree =Math.round( (losses / matchesResult.length) * 360  )
const drawDegree =Math.round( (draws / matchesResult.length) * 360  )

console.log(`wins ${winDegree} draws ${drawDegree} losses ${lossDegree}`);
return {winAngle: winDegree, lossAngle: winDegree + lossDegree, wins, draws, losses}
}
pieChart()


  return (
    <div className="basis-[45%] flex-1 relative bg-light-grey flex flex-col items-center justify-between py-3 px-2 gap-4 rounded-md shadow-dashboard-card">
        <p className="font-bold font-poppins">Games Stats</p>
      <div
        style={{
          background: `conic-gradient(#c74aae 0deg, #c74aae ${pieChart().winAngle}deg,  #66355c 0deg, #66355c ${pieChart().lossAngle}deg, #1b1b1b 0deg, #1b1b1b 360deg)`,
        }}
        className="h-[7rem] w-[7rem] rounded-full flex items-center justify-center  text-center games-stat-card circle-progress"
      >
         <div className="z-[1] text-[1.8rem] font-bold text-center">
            <span>{matchesResult.length}</span>
            <hr />
            <span className="text-[1.2rem]">Games</span>
          </div>
      </div>
      <div className="flex justify-center gap-2 text-xs w-full lg:w-[70%] font-poppins items-center">
        <p className="flex items-center gap-2 rounded-sm"><span className="w-[1rem] h-[1rem] bg-primary"></span> Wins {pieChart().wins}</p>
        <p className="flex items-center gap-2 rounded-sm"><span className="w-[1rem] h-[1rem] bg-hover"></span> Losses {pieChart().losses}</p>
        <p className="flex items-center gap-2 rounded-sm"><span className="w-[1rem] h-[1rem] bg-dark-grey"></span> Draws {pieChart().draws}</p>
      </div>
    </div>
  );
}
