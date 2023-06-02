import React, { useState, useEffect } from "react";

export const matchesResult = [
  { id: 1, result: "w" },
  { id: 2, result: "w" },
  { id: 3, result: "w" },
  { id: 4, result: "d" },
  { id: 5, result: "d" },
];

export default function TeamFormCard() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const percentage = calcuateTeamForm();
    const interval = setInterval(() => {
      setProgress((prev) => prev + 1);
    }, 10);
    if (progress === percentage) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [progress]);

  function calcuateTeamForm() {
    let win = 0,
      lose = 0,
      draw = 0;
    matchesResult.forEach((item) => {
      item.result == "w" ? (win += 3) : item.result == "d" ? (draw += 1) : (lose += 0);
    });
    const result = Math.round(((win + draw + lose) / (matchesResult.length * 3)) * 100);
    return result;
  }
  return (
    <>
      <div className="basis-[45%] flex-1 bg-light-grey flex flex-col items-center py-3 px-2 gap-4 rounded-md shadow-dashboard-card">
        <p className="font-bold font-poppins w-full text-center">Team form</p>
        <div
          style={{
            background: `conic-gradient(#c74aae, ${progress * 3.6}deg, #1b1b1b 0deg)`,
          }}
          className="circle-progress w-[7rem] h-[7rem] relative rounded-full flex items-center justify-center"
        >
          <div className="z-[1] text-[1.8rem] font-bold text-center">
            <span>{progress}%</span>
            <hr />
            <span className="text-[1.2rem]">Form</span>
          </div>
        </div>
        <p className="bg-light-grey font-poppins last-five-match w-[60%] text-center">
          Last 5 matches
        </p>
        <div className="flex gap-4">
          {matchesResult?.map((item) => {
            return (
              <div
                key={item.id}
                className={`uppercase px-2 min-w-[2rem] text-[.8rem] lg:min-w-[2rem] text-center shadow-sm rounded-sm ${
                  item.result == "w"
                    ? "bg-primary"
                    : item.result == "l"
                    ? "bg-hover"
                    : "bg-dark-grey"
                }`}
              >
                {item.result}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
