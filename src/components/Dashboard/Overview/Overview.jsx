import React from 'react'
import {DHero} from ".."
import TeamFormCard from './TeamFormCard'

export default function Overview() {
  return (
    <section className='bg-black'>
        <DHero />
        <section className='flex'>
        <TeamFormCard />
        </section>
    </section>
  )
}
