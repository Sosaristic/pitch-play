import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header>
        <Link to="/" className='font-righteous text-primary px-8 text-[2rem] lg:text-[3rem] py-4'>PitchPlay</Link>
    </header>
  )
}
