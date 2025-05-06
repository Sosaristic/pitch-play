import React from 'react';
import StatCard from '../../components/competition/dashboard/StatCard';
import { FootballTable } from '../../components/UI';

function CompetitionDashboard() {
  return (
    <div className="px-2 lg:px-8 pb-[4rem] lg:pb-0">
      <section>
        <h2 className="text-[1.8rem] lg:text-[2.5rem] font-[600] font-poppins">
          Dashboard
        </h2>
        <p className="text-secondary-text font-jost font-[600]">
          Welcome back, Anderson
        </p>
        <div className="grid grid-cols-2 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Total Teams" value={10} />
          <StatCard title="Total Goals" value={30} />
          <StatCard title="Yellow Cards" value={12} />
          <StatCard title="Red Cards" value={12} />
        </div>
      </section>

      <h2 className="text-[1.2rem]  my-4 lg:text-[1.8rem] font-[600] font-poppins">
        Competition Standings
      </h2>
      <div>
        <FootballTable group={'Group A'} />
        <FootballTable group={'Group B'} />
      </div>
    </div>
  );
}

export default CompetitionDashboard;
