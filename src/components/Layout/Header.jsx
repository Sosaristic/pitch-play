import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from "../../components/UI"
export default function Header() {
  return (
    <header className='flex items-center pr-8'>
        <Link to="/" className='font-righteous text-primary px-8 text-[2rem] lg:text-[3rem] py-2'>PitchPlay</Link>
        <div className='ml-auto'><Link to="/dashboard/overview"><Button value="Login"/></Link></div>
    </header>
  )
}
