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
      <div className="w-full lg:w-1/2 flex-1 flex relative ">
      {pathname === "/reset-password" ? (
        <ResetPassword />
      ) : (
        <div
          className={`w-full bg-white flex items-center rounded-[4rem] px-2 md:px-8 authentication ${
            pathname == "/sign-up" ? "flipped" : "no-flip"
          }`}
        >
          <Login />

          <SignUp />
        </div>
      )}
      </div>

      {displayLoader && <Loader />}
    </div>
  );
}
