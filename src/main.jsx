import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext.jsx';

import Home from './pages/Home.jsx';
import Authentication from './pages/Authentication.jsx';
import {
  ResetPassword,
  Login,
  SignUp,
  Verification,
} from './components/Authentication';

import ViewMatch from './pages/ViewMatch.jsx';
import { LineUp, Summary, Statistics, Info } from './components/view-match';
import Dashboard from './pages/Dashboard.jsx';
import { ErrorBoundary } from './components/UI';
import {
  Matches,
  Overview,
  ScoreUpdater,
  MyTeam,
  MatchRoute,
  TeamLineUp,
  TeamSettings,
  TeamFormation,
  CreateTeam,
  TeamSquad,
  Results,
  Fixtures,
} from './components/Dashboard/';
import { CompetitionDashboard, CompetitionMatches } from './pages/competition';
import CompetitionLayout from './components/Layout/CompetitionLayout.jsx';
import Payment from './pages/payment/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      { path: '', element: <Home /> },
      {
        path: '/view-match/:id',
        element: <ViewMatch />,
        children: [
          { index: true, element: <Info /> },
          { path: 'summary', element: <Summary /> },
          { path: 'statistics', element: <Statistics /> },
          { path: 'line-ups', element: <LineUp /> },
        ],
      },
    ],
  },
  {
    element: <Dashboard />,
    children: [
      { path: '/dashboard/overview', element: <Overview /> },
      {
        element: <MatchRoute />,
        children: [
          { path: '/dashboard/matches', element: <Matches /> },
          { path: '/dashboard/matches/fixtures', element: <Fixtures /> },
          { path: '/dashboard/matches/results', element: <Results /> },

          { path: '/dashboard/matches/live/:id', element: <ScoreUpdater /> },
        ],
      },
      { path: '/dashboard/my-team/create-team', element: <CreateTeam /> },

      {
        element: <MyTeam />,
        children: [
          { path: '/dashboard/my-team', element: <TeamLineUp /> },
          { path: '/dashboard/my-team/squad-list', element: <TeamSquad /> },
          { path: '/dashboard/my-team/formation', element: <TeamFormation /> },
          { path: '/dashboard/my-team/settings', element: <TeamSettings /> },
        ],
      },
    ],
  },
  {
    element: <CompetitionLayout />,
    children: [
      { path: '/competition/dashboard', element: <CompetitionDashboard /> },
      { path: '/competition/matches', element: <CompetitionMatches /> },
      { path: '/competition/standings', element: <CompetitionDashboard /> },
      { path: '/competition/live', element: <CompetitionDashboard /> },
    ],
  },
  {
    element: <Authentication />,
    children: [
      { path: '/sign-in', element: <Login /> },
      { path: '/sign-up', element: <SignUp /> },
      { path: '/reset-password', element: <ResetPassword /> },
      { path: '/verification', element: <Verification /> },
    ],
  },

  {
    element: <Payment />,
    path: '/payment',
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);
