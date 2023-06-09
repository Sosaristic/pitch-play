import React from "react";
import { useLocation } from "react-router-dom";
import SoccerBro from "../assets/svg/soccer-bro.svg";
import Login from "../components/Authentication/Login";
import SignUp from "../components/Authentication/SignUp";

export default function Authentication() {
  const {pathname} = useLocation()
 
  return (
    <div className=" min-h-screen flex text-dark bg-primary relative">
      <div className="w-1/2 flex-1 hidden lg:block">
        <img src={SoccerBro} alt="" />
      </div>
      <div className={`w-full lg:w-1/2 flex items-center justify-center flex-1 bg-white rounded-[4rem] px-4 md:px-8 authentication ${pathname == "/sign-up"? "flipped": "no-flip"}`}>
         <Login /> 
         
          <SignUp />
     
      </div>
    </div>
  );
}
