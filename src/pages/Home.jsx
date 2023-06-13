import React from "react";
import { Chips, MatchCard } from "../components/Home";
import { matchData } from "../components/Home/homeData";
import { useAppContext } from "../context/AppContext";
import { Loader } from "../components/UI";
export default function Home() {
  const {displayLoader} = useAppContext()
  return (
    <main className="">
      
      <Chips />
      <section className="mt-8">
        {matchData.map((item) => {
          return <MatchCard key={item.id} data={item} />;
        })}
      </section>
      {displayLoader && <Loader />}
    </main>
  );
}
