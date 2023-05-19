import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";

const UpdateCard = ({ score, updateValues, scoreType, team }) => {
  const reduceValues = (valueToAdd)=>{
    
    
    updateValues(scoreType, team, valueToAdd)
  }
  return (
    <div className="flex gap-4 w-full items-center">
      <button  className="vs:text-[1.2rem]  sm:text-[1.5rem] rounded-lg md:rounded-2xl border
       bg-primary border-primary active:bg-hover flex-1 p-1 basis-[40%] flex items-center justify-center disabled:bg-hover"
       onClick={()=>reduceValues(-1)}
       disabled={score <=0}
       >
        <AiOutlineMinus />
      </button>
      <p className="font-[900]">{score}</p>
      <button  className="vs:text-[1.2rem] sm:text-[1.5rem]  rounded-lg md:rounded-2xl border
       bg-primary border-primary active:bg-hover flex-1 p-1 basis-[40%] flex items-center justify-center"
       onClick={()=>reduceValues(+1)}

       >
        <BsPlusLg />
      </button>
    </div>
  );
};
export default function LiveUpdateButtons({ valuesData, updateValues }) {
  const { type, homeScore, awayScore } = valuesData;
  return (
    <div className="flex gap-2 items-center">
      <UpdateCard score={homeScore} updateValues={updateValues} scoreType={type} team="homeScore"/>
      <p className="w-3/5 text-center md:text-[1rem] text-[.7rem]  font-jost font-[500] capitalize">
        {type}
      </p>
      <UpdateCard score={awayScore} updateValues={updateValues} scoreType={type} team="awayScore"/>
    </div>
  );
}
