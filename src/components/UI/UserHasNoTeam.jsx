import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from "../UI"
export default function UserHasNoTeam() {
  return (
    <div className='flex w-full px-4  flex-col gap-2 items-center mt-8 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
       <p className='text-lg font-[600] w-[100%]'> You do not have any team created yet</p>
       <Link to={"/dashboard/my-team/create-team"} className='w-fit'><Button value={"Create Team"}/></Link>
    </div>
  )
}
