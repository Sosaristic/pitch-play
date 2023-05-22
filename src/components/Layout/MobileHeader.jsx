import React from "react"
import { Link } from "react-router-dom"

export default function MobileHeader(){
    return(
        <>
         <header className="lg:hidden fixed top-0 right-0 left-0 z-[100] bg-grey  px-2 py-1">
      <Link to="/" className="font-righteous text-primary text-[1.6rem] lg:text-[2.5rem]">
          PitchPlay
        </Link>
      </header>
        </>
    )
}