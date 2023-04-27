import React from "react";

export default function StatCard({ type, homeValue, awayValue }) {
  function calculatePercentage(firstValue, secondValue) {
    let value1, value2;
    const total = firstValue + secondValue;
    value1 = Math.floor((firstValue / total) * 100);
    value2 = Math.floor((secondValue / total) * 100);

    return { value1, value2 };
  }

  // const { value1, value2 } = calculatePercentage(20, 70);

  function chooseBgColor(teamA, teamB) {
    const { value1, value2 } = calculatePercentage(teamA, teamB);
    let teamAValues = { color: null, width: value1 };
    let teamBValues = { color: null, width: value2 };
    if (value1 > value2) {
      teamAValues.color = "red";
      teamBValues.color = "green";
    } else {
      teamAValues.color = "green";
      teamBValues.color = "red";
    }

    return { teamAValues, teamBValues };
  }

  const { teamAValues, teamBValues } = chooseBgColor(homeValue, awayValue);

  return (
    <div>
      <div className="flex flex-col gap-2 mt-3">
        <div className="flex font-[600] text-gray-400">
          <div className="basis-1/3 flex-1">{homeValue}</div>
          <div className="basis-1/3 flex-1 text-center">{type}</div>
          <div className="basis-1/3 flex-1 text-right">{awayValue}</div>
        </div>
        <div className="flex gap-4">
          <div
            className={`relative min-h-[.6rem] flex-1 vs:min-h-[.8rem] bg-grey w-full rounded-tl-2xl rounded-bl-2xl`}
          >
            <div
              className="absolute h-full bg-primary rounded-tl-2xl rounded-bl-2xl "
              style={{ width: `${teamAValues.width}%` }}
            ></div>
          </div>
          <div
            className={`relative min-h-[.6rem] flex-1 vs:min-h-[.8rem] bg-grey rounded-tr-2xl rounded-br-2xl`}
          >
            <div
              className="absolute right-0 h-full  bg-primary rounded-tr-2xl rounded-br-2xl "
              style={{ width: `${teamBValues.width}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
