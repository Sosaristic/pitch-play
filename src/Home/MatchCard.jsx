import React from "react";

export default function MatchCard() {

  return (
    <div className="flex flex-col gap-4 relative p-4 ">
      <p className="font-[500] flex pr-2">Friendly Match <button className="ml-auto">view</button></p>
      <div className="flex items-center text-[1rem] rounded-lg p-6 gap-4 font-bold border-l-[6px] border-primary  bg-grey">
        <div>HT</div>
        <div className="flex flex-1 flex-col justify-between text-[1rem] rounded-lg gap-4 font-bold">
          <div className="basis-[40%] flex">
            Ronaldo Fans <span className="ml-auto">4</span>
          </div>
          <div className="basis-[40%] flex">
            Messi Fans <span className="ml-auto">5</span>
          </div>
        </div>
      </div>
    </div>
  );
}
