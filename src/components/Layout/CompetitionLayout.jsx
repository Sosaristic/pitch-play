import React from 'react';
import { BottomNav, DashboardHeader, MainSideNav } from '../Dashboard';
import { Outlet } from 'react-router-dom';

function CompetitionLayout() {
  return (
    <main className="relative flex min-h-full">
      <div className="bg-grey hidden lg:block w-[15%] min-h-[100vh]">
        <MainSideNav isCompetition />
      </div>

      <div className="w-[70%] relative min-h-[100vh] bg-dark flex-1">
        <DashboardHeader />

        <Outlet />
      </div>
      <div className="fixed bottom-0 left-0 right-0 lg:hidden z-[100]">
        <BottomNav />
      </div>
    </main>
  );
}

export default CompetitionLayout;
