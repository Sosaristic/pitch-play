import React from 'react'
import { Hero, Chips, MatchCard } from '../Home'
export default function Home() {
  return (
    <main className="lg:w-[50%] md:w-[80%] mx-auto  min-h-[80vh] relative">
        <Chips />
        <section className='mt-8'>
            {Array.from({length: 4}, ()=><MatchCard />)}
            
        </section>
    </main>
  )
}
