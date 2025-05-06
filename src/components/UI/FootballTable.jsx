import React from 'react';

const tableHeader = ['#', 'Team', 'P', 'W', 'D', 'L', 'GF', 'GA', 'GD', 'Pts'];

const teams = [
  {
    position: 1,
    team: 'Team A',
    p: 10,
    w: 7,
    d: 2,
    l: 1,
    gf: 20,
    ga: 10,
    gd: 10,
    pts: 23,
  },
  {
    position: 2,
    team: 'Team B',
    p: 10,
    w: 6,
    d: 3,
    l: 1,
    gf: 18,
    ga: 12,
    gd: 6,
    pts: 21,
  },
  {
    position: 3,
    team: 'Team C',
    p: 10,
    w: 5,
    d: 2,
    l: 3,
    gf: 15,
    ga: 14,
    gd: 1,
    pts: 17,
  },
];

function FootballTable({ group }) {
  return (
    <div className="p-4 mx-auto ">
      <h2>{group}</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border shadow-md border-primary">
          {/* Dynamic Table Header */}
          <thead className="bg-primary">
            <tr>
              {tableHeader.map((header, index) => (
                <th
                  key={index}
                  className="px-4 py-2 text-center border-b border-primary"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {teams.map((team, index) => (
              <tr key={index} className="transition duration-75 hover:bg-hover">
                <td className="px-4 py-2 text-sm text-center border-b md:text-lg border-primary">
                  {team.position}
                </td>
                <td className="px-4 py-2 text-sm text-left border-b whitespace-nowrap md:text-lg w-fit border-primary">
                  {team.team}
                </td>
                <td className="px-4 py-2 text-sm text-center border-b md:text-lg border-primary">
                  {team.p}
                </td>
                <td className="px-4 py-2 text-sm text-center border-b md:text-lg border-primary">
                  {team.w}
                </td>
                <td className="px-4 py-2 text-sm text-center border-b md:text-lg border-primary">
                  {team.d}
                </td>
                <td className="px-4 py-2 text-sm text-center border-b md:text-lg border-primary">
                  {team.l}
                </td>
                <td className="px-4 py-2 text-sm text-center border-b md:text-lg border-primary">
                  {team.gf}
                </td>
                <td className="px-4 py-2 text-sm text-center border-b md:text-lg border-primary">
                  {team.ga}
                </td>
                <td className="px-4 py-2 text-sm text-center border-b md:text-lg border-primary">
                  {team.gd}
                </td>
                <td className="px-4 py-2 text-sm text-center border-b md:text-lg border-primary">
                  {team.pts}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FootballTable;
