import { IoMdShirt } from "react-icons/io";
import { matchData } from "../Home/homeData";
import {Time} from "../UI";

export default function ScoreBoard({scoreBoardData, showSeconds, matchTime, stopTime}){
    const {homeScore, awayScore} = scoreBoardData
    const {id, time, competition, home, away} = matchData[0]
    const {homeName, homeColor} = home
    const {awayName, awayColor} = away

    return (
        <div>
            <p className="mb-2 font-bold">{competition}</p>
            <div className="relative flex bg-grey p-4 items-center rounded-lg match-active">
                <div className="basis-[35%] flex-1 flex flex-col items-center gap-2">
                    <div className="text-[3.5rem] "><IoMdShirt color={homeColor}/></div>
                    <p className="text-center font-[600]">{homeName}</p>
                </div>
                <div className="basis-[20%] flex-1 flex flex-col items-center ">
                    <div className="text-[1.2rem] md:text-[2rem]  font-bold font-inter">{homeScore} - {awayScore}</div>
                    <div className="text-primary"><Time showSeconds={showSeconds} matchTime={matchTime} stopTime={stopTime}/></div>
                </div>
                <div className="basis-[35%] flex-1 flex flex-col items-center gap-2">
                    <div className="text-[3.5rem]"><IoMdShirt color={awayColor}/></div>
                    <p className="text-center font-[600]">{awayName}</p>
                </div>
            </div>
        </div>
    )
}