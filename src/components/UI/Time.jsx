import React, { useState, useEffect } from "react";
import { intervalToDuration } from "date-fns";
export default function Time({ showSeconds, matchTime, stopTime }) {
  const [time, setTime] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const prevDate = matchTime

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const currentDate = Date.now();
      const interval = intervalToDuration({
        start: prevDate,
        end: currentDate,
      });

      setTime({ ...interval });
    }, 1000);
    if(stopTime){
      clearInterval(timeInterval)
    }
    return () => clearInterval(timeInterval);
  }, [matchTime, stopTime]);

  return (
    <div className="flex text-[1.5rem]">
      <span >{time.minutes + time.hours * 60}</span>
      {showSeconds && (
        <span className="flex">
          <span>:</span>
          {time.seconds}
        </span>
      )}
      '
    </div>
  );
}
