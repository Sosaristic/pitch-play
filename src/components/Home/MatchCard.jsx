import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdShirt } from 'react-icons/io';
import { FaChevronRight } from 'react-icons/fa';
export default function MatchCard({ data }) {
  const navigate = useNavigate();
  const { id, time, home, away, matchStarted, competition } = data;
  const { homeName, homeScore, homeColor } = home;
  const { awayName, awayScore, awayColor } = away;

  const navigateToViewMatch = (id) => {
    navigate(`/view-match/${id}/`);
  };
  return (
    <div
      className="relative flex flex-col gap-2 p-4 "
      onClick={() => navigateToViewMatch(id)}
    >
      <div className="font-[500] flex pr-2 text-[.8rem]">
        <p> {competition || 'Friendly Match'}</p>

        <button className="ml-auto">
          <FaChevronRight />
        </button>
      </div>
      <div
        className={`relative flex items-center text-[1rem] rounded-lg p-4 gap-4 font-bold ${
          matchStarted ? 'match-active' : ''
        }   bg-grey`}
      >
        <div>{matchStarted ? `${time}'` : '22:00'}</div>
        <div className="flex flex-1 flex-col justify-between text-[1rem] rounded-lg gap-2 font-bold">
          <div className="basis-[40%] flex items-center gap-2">
            <span>
              <IoMdShirt color={homeColor} size="1.8rem" />
            </span>{' '}
            {homeName}{' '}
            <span className="ml-auto">{matchStarted ? homeScore : '-'}</span>
          </div>
          <div className="basis-[40%] flex items-center gap-2">
            <span>
              <IoMdShirt color={awayColor} size="1.8rem" />
            </span>
            {awayName}{' '}
            <span className="ml-auto">{matchStarted ? awayScore : '-'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
