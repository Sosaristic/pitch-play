import React from 'react';

const StatCard = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center gap-4 px-2 py-3 rounded-md bg-light-grey shadow-dashboard-card">
      <h2 className="text-lg font-righteous">{title}</h2>
      <p className="text-2xl">{value}</p>
    </div>
  );
};

export default StatCard;
