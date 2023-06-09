import React, { useState } from "react";
import { BottomNav, DashboardHeader, MainSideNav } from "../components/Dashboard";
import { Loader } from "../components/UI";
import { Outlet, Navigate } from "react-router-dom";
import { MyTeamDataProvider } from "../context/MyTeamData";
import { NewTeamDataProvider } from "../context/CreateTeamData";
import { getTeamFromDB } from "../service/firestoreFunctions";
import { useFirebaseAuthentication } from "../service/useFirebaseAuthentication";
import { useAppContext } from "../context/AppContext";

import "react-toastify/dist/ReactToastify.css";
export default function Dashboard() {
  const {setUserHasTeam} = useAppContext()
  const { checkUserSignedIn } = useFirebaseAuthentication();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);

    checkUserSignedIn()
      .then((user) => {
        const userEmail = user.email;        
        return getTeamFromDB(userEmail);
      })
      .then((userTeam) => {
        if (userTeam) {
          setUserHasTeam(userTeam);
        }
        setUser(true);
      })
      .catch((error) => {
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
  if (!user && !loading) {
    return <Navigate to={"/sign-in"} />;
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
          </main>
        </NewTeamDataProvider>
      </MyTeamDataProvider>
    </div>
  );
}
