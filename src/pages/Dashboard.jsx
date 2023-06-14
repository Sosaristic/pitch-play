import React, { useEffect, useLayoutEffect, useState } from "react";
import { BottomNav, DashboardHeader, MainSideNav } from "../components/Dashboard";
import { Loader } from "../components/UI";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { MyTeamDataProvider } from "../context/MyTeamData";
import { NewTeamDataProvider } from "../context/CreateTeamData";
import { useLoginToken } from "../hooks/useLoginToken";
import { ToastContainer, Zoom } from "react-toastify";
import { auth } from "../service/firebase";
import { useFirebaseAuthentication } from "../service/useFirebaseAuthentication";
import { onAuthStateChanged } from "firebase/auth";

import "react-toastify/dist/ReactToastify.css";
export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {user ? (
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
                    <ToastContainer
                      transition={Zoom}
                      position="top-center"
                      hideProgressBar
                      theme="dark"
                    />
                  </main>
                </NewTeamDataProvider>
              </MyTeamDataProvider>
            </div>
          ) : (
            <Navigate to={"/sign-in"}/>
          )}
        </div>
      )}
    </div>
  );
}
