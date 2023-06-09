import React, {useState} from 'react'
import {TextField} from "../Form";
import {Button} from "../UI";
import { Link } from "react-router-dom";

export default function SignUp() {
    const [signUpValues, setsignUpValues] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
      });
    
      const handleOnchange = ({ target: { name, value } }) => {
        setsignUpValues({
          ...signUpValues,
          [name]: value,
        });
      };
  return (
    <div className='w-[80%] sign-up bg-white absolute'>
           <p className="text-center text-[1.8rem] font-bold font-jost"> Hello, Welcome back</p>
        <p className="text-center font-jost text-[1.2rem] font-[500]">
          {" "}
          Create An Account
        </p>

        <form className="flex flex-col gap-4 md:w-[80%] mx-auto mt-8">
        <div>
            <TextField
              type="text"
              name="lastName"
              placeholder="surname"
              label="Last Name"
              id="lastName"
              value={signUpValues.email}
              onChange={handleOnchange}
              errorMsg="invalid name"
            />
          </div>
          <div>
            <TextField
              type="text"
              name="firstName"
              placeholder="Your name"
              label="First Name"
              id="firstName"
              value={signUpValues.email}
              onChange={handleOnchange}
              errorMsg="invalid name"
            />
          </div>
          <div>
            <TextField
              type="email"
              name="email"
              placeholder="test@email.com"
              label="Email"
              id="signUpEmail"
              value={signUpValues.email}
              onChange={handleOnchange}
              errorMsg="invalid email"
            />
          </div>
          <TextField
            type="password"
            name="password"
            placeholder="password"
            label="Password"
            id="signUpPassword"
            value={signUpValues.password}
            onChange={handleOnchange}
            errorMsg="invalid password"
          />
          <div className="h-[3rem]">
            <Button type="submit" value="Sign Up" />
          </div>
          <p> have an account? <Link to="/sign-in" className="text-primary underline">Sign in</Link></p>
        </form>
       
    </div>
  )
}
