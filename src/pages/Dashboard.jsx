import React, { useEffect, useLayoutEffect, useState } from "react";
import { BottomNav, DashboardHeader, MainSideNav } from "../components/Dashboard";
import { Loader } from "../components/UI";
import { Outlet, Navigate } from "react-router-dom";
import { MyTeamDataProvider } from "../context/MyTeamData";
import { NewTeamDataProvider } from "../context/CreateTeamData";
import { ToastContainer, Zoom } from "react-toastify";
import { auth } from "../service/firebase";
import { useFirebaseFirestore } from "../service/useFirebaseFirestore";
import { useFirebaseAuthentication } from "../service/useFirebaseAuthentication";
import { onAuthStateChanged } from "firebase/auth";

import "react-toastify/dist/ReactToastify.css";
export default function Dashboard() {
  const { getTeamFromDB } = useFirebaseFirestore();
  const { checkIfUserIsSignedIn, checkUserSignedIn } = useFirebaseAuthentication();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);
  const [userHasTeam, setUserHasTeam] = useState(false);

    checkUserSignedIn()
      .then((user) => {
        const userEmail = user.email;
        return getTeamFromDB(userEmail);
      })
      .then((userTeam) => {
        if (userTeam) {
          setUserHasTeam(true);
        }
        setUser(true);
      })
      .catch((error) => {
        console.log(error);
      })

      .finally(() => {
        setLoading(false);
      });

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  console.log(user);
  if (!user && !loading) {
    return <Navigate to={"/sign-in"} />;
  }

  if(!userHasTeam && !loading){
    return <Navigate to={"/dashboard/my-team/create-team"}/>
  }

  return (
    <div>
      {" "}
      <MyTeamDataProvider>
        <NewTeamDataProvider>
          <main className="flex relative min-h-full">
            <div className="bg-grey hidden lg:block w-[15%] min-h-[100vh]">
              <MainSideNav />
            </div>

            <div className="w-[70%] relative min-h-[100vh] bg-dark flex-1">
              <DashboardHeader />

              <Outlet />
            </div>
            <div className="fixed bottom-0 left-0 right-0 lg:hidden z-[100]">
              <BottomNav />
            </div>
            <ToastContainer transition={Zoom} position="top-center" hideProgressBar theme="dark" />
          </main>
        </NewTeamDataProvider>
      </MyTeamDataProvider>
    </div>
  );
}
