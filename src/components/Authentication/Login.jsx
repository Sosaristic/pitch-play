import React, {useState} from 'react'
import {TextField} from "../Form";
import {Button} from "../UI";
import { Link, useNavigate } from "react-router-dom";
import { useLoginToken } from '../../hooks/useLoginToken';

export default function Login() {
const navigate = useNavigate()
const {setToken} = useLoginToken()

    const [loginValues, setLoginValues] = useState({
        email: "",
        password: "",
      });
    
      const handleOnchange = ({ target: { name, value } }) => {
        setLoginValues({
          ...loginValues,
          [name]: value,
        });
      };

      const handleSubmit = (e)=>{
        e.preventDefault()
        setToken(true)
        navigate("/dashboard/overview")
      }
  return (
    <div className='absolute w-[80%] bg-white login'>
           <p className="text-center text-[1.8rem] font-bold font-jost"> Hello, Welcome back</p>
        <p className="text-center font-jost text-[1.2rem] font-[500]">
          {" "}
          Please Log in to ur Account{" "}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:w-[80%] mx-auto mt-8">
          <div>
            <TextField
              type="email"
              name="email"
              placeholder="test@email.com"
              label="Email"
              id="email"
              value={loginValues.email}
              onChange={handleOnchange}
              errorMsg="invalid email"
            />
          </div>
          <TextField
            type="password"
            name="password"
            placeholder="password"
            label="Password"
            id="password"
            value={loginValues.password}
            onChange={handleOnchange}
            errorMsg="invalid password"
          />
          <div className="h-[3rem]">
            <Button type="submit" value="Log in" />
          </div>
          <p> Don't have an account? <Link to="sign-up" className="text-primary underline">Sign Up</Link></p>
        </form>
       
    </div>
  )
}
