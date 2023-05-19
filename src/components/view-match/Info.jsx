import React from "react";
import { MdCalendarMonth, MdStadium } from "react-icons/md";
import { GiWhistle } from "react-icons/gi";

export default function Info() {
  return (
    <section className="text-gray-400 mt-4">
      <p className="font-bold">MATCH INFO</p>
      <div className="border border-gray-400 rounded-lg mt-4 py-1 px-3 vs:p-6 flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="flex items-center gap-2 flex-1 justify-center">
            <MdCalendarMonth size={24}/> 25 Apr 2023
          </div>
          <div className="flex items-center gap-1 flex-1 justify-center">
            <GiWhistle size={24}/> Joshua (ECE)
          </div>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <MdStadium size={24}/>
          Franco A
        </div>
      </div>
    </section>
  );
}
