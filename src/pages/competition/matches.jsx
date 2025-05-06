import React from 'react';
import { matchResult } from '../../components/UI/UIData';
import { TeamsCard } from '../../components/UI';

function CompetitionMatches() {
  const newDate = new Date();
  const twoDaysAgo = newDate;
  console.log(twoDaysAgo, 'two');

  return (
    <div className="px-2 lg:px-8 pb-[4rem] lg:pb-0">
      <h2 className="text-[1.8rem] lg:text-[2.5rem] font-[600] font-poppins">
        Matches
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {matchResult.map((matchData) => {
          return (
            <div key={matchData.matchId} className="w-full">
              <TeamsCard matchData={matchData} fixture />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CompetitionMatches;
