import React from 'react'
import TeamsCard from '../../UI/TeamsCard'

export default function Matches() {
  return (
    <div>

      <div className='flex relative flex-wrap justify-evenly  gap-4 px-8'>
      {Array.from({length:8}, (v, id)=>  <TeamsCard key={id}/>)}
      </div>
      </div>
  )
}
