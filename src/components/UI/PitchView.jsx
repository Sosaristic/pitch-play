import React from "react";

function PlayerCard() {
  return (
    <div className="flex flex-col items-center">
      <div className="h-[1.8rem] w-[1.8rem] md:h-[2.5rem] md:w-[2.5rem] rounded-full bg-black text-white flex items-center justify-center z-20">
        10
      </div>
      <p className="text-[.8rem] lg:text-lg z-10">Anderson</p>
    </div>
  );
}

export default function PitchView() {
  return (
    <div className="bg-pitch-light-green p-4 relative">
      <div className="min-w-full border-2 border-white relative overflow-hidden">
        <div className="bg-pitch-light-green min-h-[5rem] min-w-full flex items-center ">
          {Array.from({ length: 1 }, (item, index) => {
            return (
              <div className="flex-1">
                <PlayerCard />
              </div>
            );
          })}
        </div>
        <div className="bg-pitch-dark-green min-h-[5rem] min-w-full flex items-center">
          {Array.from({ length: 4 }, (item, index) => {
            return (
              <div key={index} className="flex-1">
                <PlayerCard />
              </div>
            );
          })}
        </div>
        <div className="bg-pitch-light-green min-h-[5rem] min-w-full flex items-center">
          {Array.from({ length: 2 }, (item, index) => {
            return (
              <div key={index} className="flex-1">
                <PlayerCard />
              </div>
            );
          })}
        </div>
        <div className="bg-pitch-dark-green min-h-[5rem] min-w-full flex items-center">
          {Array.from({ length: 3 }, (item, index) => {
            return (
              <div key={index} className="flex-1">
                <PlayerCard />
              </div>
            );
          })}
        </div>

        <div className="bg-pitch-light-green min-h-[5rem] min-w-full flex items-center">
          {Array.from({ length: 1 }, (item, index) => {
            return (
              <div key={index} className="flex-1">
                <PlayerCard />
              </div>
            );
          })}
        </div>

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
