import React from 'react';
import { Chips, Competition, MatchCard } from '../components/Home';
import { fixturesData, matchData } from '../components/Home/homeData';
import { useAppContext } from '../context/AppContext';
import { useSearchParams } from 'react-router-dom';
export default function Home() {
  const { displayLoader } = useAppContext();
  const [searchParams] = useSearchParams();

  const filter = searchParams.get('filter');

  return (
    <main className="">
      <Chips />

      <section className="mt-8">
        {filter === 'matches' &&
          matchData.map((item) => {
            return <MatchCard key={item.id} data={item} />;
          })}

        {filter === 'live' &&
          matchData.map((item) => {
            return <MatchCard key={item.id} data={item} />;
          })}

        {filter === 'fixtures' &&
          fixturesData.map((item) => {
            return <MatchCard key={item.id} data={item} />;
          })}

        {filter === 'competition' && <Competition />}
      </section>
      {displayLoader && <Loader />}
    </main>
  );
}
