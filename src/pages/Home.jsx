import React from "react";
import { Hero, Chips, MatchCard } from "../components/Home";
import { matchData } from "../components/Home/homeData";
export default function Home() {
  return (
    <main className="">
      
      <Chips />
      <section className="mt-8">
        {matchData.map((item) => {
          return <MatchCard key={item.id} data={item} />;
        })}
      </section>
    </main>
  );
}
