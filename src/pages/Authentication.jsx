import React from "react";
import { useLocation } from "react-router-dom";
import SoccerBro from "../assets/svg/soccer-bro.svg";
import { Loader } from "../components/UI";
import { useAppContext } from "../context/AppContext";
import { ResetPassword, Login, SignUp } from "../components/Authentication";
export default function Authentication() {
  const { pathname } = useLocation();
  const { displayLoader } = useAppContext();

  return (
    <div className=" min-h-screen flex text-dark bg-primary relative">
      <div className="w-1/2 flex-1 hidden lg:block">
        <img src={SoccerBro} alt="" />
      </div>
      <div className="w-full lg:w-1/2 flex-1 flex relative">
      {pathname === "/reset-password" ? (
        <ResetPassword />
      ) : (
        <div
          className={`w-full min-h-screen relative overflow-auto   bg-white flex items-center justify-center  rounded-[4rem] px-4 md:px-8`}
        >
          <div className={`transition-transform duration-300 ${pathname == "/sign-in"? "block": "hidden"} w-full`}><Login /></div>

          <div className={`transition-transform duration-300 ${pathname == "/sign-up"? "block": "hidden"} w-full`}><SignUp /></div>
        </div>
      )}
      </div>

      {displayLoader && <Loader />}
    </div>
  );
}
