import React from "react";
import { Hero, Chips, MatchCard } from "../Home";
import { matchData } from "../Home/homeData";
export default function Home() {
    
  return (
    <main className="lg:w-[50%] md:w-[80%] mx-auto  min-h-[80vh] relative">
      <Chips />
      <section className="mt-8">
        {matchData.map((item) => {
          return <MatchCard key={item.id} data={item} />;
        })}
      </section>
    </main>
  );
}
