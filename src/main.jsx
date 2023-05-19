import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";

import Home from "./pages/Home.jsx";
import ViewMatch from "./pages/ViewMatch.jsx";
import { LineUp, Summary, Statistics, Info } from "./components/view-match";
import Dashboard from "./pages/Dashboard.jsx";
import { Matches, Overview, ScoreUpdater, MyTeam, MatchRoute, TeamLineUp, SquadList, TeamSettings, TeamFormation } from "./components/Dashboard/";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "/view-match/:id",
        element: <ViewMatch />,
        children: [
          { index: true, element: <Info /> },
          { path: "summary", element: <Summary /> },
          { path: "statistics", element: <Statistics /> },
          { path: "line-ups", element: <LineUp /> },
        ],
      },
    ],
  },
  {
    element: <Dashboard />,
    children: [
      { path: "/dashboard/overview", element: <Overview /> },
      {
        
        element: <MatchRoute />,
        children: [
          {path: "/dashboard/matches", element: <Matches />},
          {path: "/dashboard/matches/live/:id", element: <ScoreUpdater />}
        ]
      },
      { element: <MyTeam />, 
    children: [
      {path: "/dashboard/my-team", element: <TeamLineUp />},
      {path: "/dashboard/my-team/squad-list", element: <SquadList />},
      {path: "/dashboard/my-team/formation", element: <TeamFormation />},

      {path: "/dashboard/my-team/settings", element: <TeamSettings />}


    ]
    },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
