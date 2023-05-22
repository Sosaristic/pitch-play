import React from "react"
import { Link } from "react-router-dom"

export default function MobileHeader(){
    return(
        <>
         <header className="lg:hidden text-center sm:text-left px-2 py-1">
      <Link to="/" className="font-righteous text-primary text-[2rem] lg:text-[2.5rem] py-4">
          PitchPlay
        </Link>
      </header>
        </>
    )
}