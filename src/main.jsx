import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home.jsx";
import ViewMatch from "./pages/ViewMatch.jsx";
import { LineUp, Summary, Statistics, Info } from "./components/view-match";
import Dashboard from "./pages/Dashboard.jsx";
import { Matches, Overview } from "./components/Dashboard/";

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
          { path: "", element: <Info /> },
          { path: "summary", element: <Summary /> },
          { path: "statistics", element: <Statistics /> },
          { path: "line-ups", element: <LineUp /> },
        ],
      },
    ],
  },
  {path: "dashboard/", element: <Dashboard />, 
children: [
  {path: "", element: <Overview />},
  {path: "/dashboard/matches", element: <Matches />}
]
}
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
