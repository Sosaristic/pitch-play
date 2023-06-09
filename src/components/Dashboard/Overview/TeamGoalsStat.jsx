import React from "react";
import ShootBall from "../../../assets/svg/shoot-ball.svg";
import Glove from "../../../assets/svg/gloves.svg"
import Save from "../../../assets/svg/goalkeeper-save.svg"



export default function TeamGoalsStat() {
  return (
    <div className="basis-[30%] flex-1 bg-light-grey flex justify-around  flex-col items-center py-3 px-2 gap-4 rounded-md shadow-dashboard-card">
        <p className="font-bold font-poppins w-full text-center">Goals Stats</p>
      <div className="h-[7rem] w-[7rem] rounded-full flex flex-col items-center justify-center font-poppins text-[2rem] border-2 border-primary">
        10 <span className="text-[1rem] -mt-2">Games</span>
      </div>
      <div className="flex  flex-col md:flex-row gap-4 px-6">
       
         <div className="flex font-poppins items-center">
              <div className="relative h-[3rem] w-[3rem] flex  items-center justify-center rounded-full p-1 bg-hover">
                <img src={ShootBall} alt="" className="max-w-[80%] max-h-[80%]" />
              </div>
              <div className="flex flex-1 flex-col items-center">
                <p className="text-[1.6rem] font-[700]">36</p>
                <p className="text-center md:text-[.8rem]">Goals Scored</p>
              </div>
            </div>

             <div className="flex gap-1 font-poppins items-center">
              <div className="relative h-[3rem] w-[3rem] flex items-center justify-center rounded-full p-1 bg-hover">
                <img src={Save} alt="" className="max-w-[80%] max-h-[80%]" />
              </div>
              <div className="flex flex-1 flex-col items-center">
                <p className="text-[1.6rem] font-[700]">24</p>
                <p className="text-center md:text-[.8rem]">Goals Conceded</p>
              </div>
            </div>

             <div className="flex gap-1 font-poppins items-center">
              <div className="relative h-[3rem] w-[3rem] flex items-center justify-center rounded-full p-1 bg-hover">
                <img src={Glove} alt="" className="max-w-[80%] max-h-[80%]" />
              </div>
              <div className="flex flex-1 flex-col items-center">
                <p className="text-[1.6rem] font-[700]">8</p>
                <p className="text-center md:text-[.8rem]">Clean Sheets</p>
              </div>
            </div>
      </div>
    </div>
  );
}
