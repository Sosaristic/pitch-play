import React, {useState} from 'react'
import {TextField} from "../Form";
import {Button} from "../UI";
import { Link } from "react-router-dom";

export default function Login() {
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
  return (
    <div className='absolute w-[80%] bg-white login'>
           <p className="text-center text-[1.8rem] font-bold font-jost"> Hello, Welcome back</p>
        <p className="text-center font-jost text-[1.2rem] font-[500]">
          {" "}
          Please Log in to ur Account{" "}
        </p>

        <form className="flex flex-col gap-4 md:w-[80%] mx-auto mt-8">
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
