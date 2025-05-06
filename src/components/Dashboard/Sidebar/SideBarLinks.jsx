import React from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { IoMdFootball } from 'react-icons/io';

export const sideBarLinks = [
  {
    id: 1,
    title: 'Overview',
    link: '/dashboard/overview',
    icon: <MdDashboard />,
  },
  {
    id: 2,
    title: 'Matches',
    link: '/dashboard/matches',
    icon: <IoMdFootball />,
  },
  {
    id: 3,
    title: 'My Team',
    link: '/dashboard/my-team',
    icon: <IoMdFootball />,
  },
];

export const competitionSideBar = [
  {
    id: 1,
    title: 'Dashboard',
    link: '/competition/dashboard',
    icon: <MdDashboard />,
  },
  {
    id: 2,
    title: 'Matches',
    link: '/competition/matches',
    icon: <IoMdFootball />,
  },
  {
    id: 2,
    title: 'Standings',
    link: '/competition/standings',
    icon: <IoMdFootball />,
  },
  { id: 3, title: 'Live', link: '/competition/live', icon: <IoMdFootball /> },
];

export default function SideBarLinks({ isCompetition }) {
  const links = isCompetition ? competitionSideBar : sideBarLinks;
  return (
    <nav>
      <ul className="flex flex-col gap-6">
        {links.map((nav, i) => (
          <li key={i} className="w-full">
            <NavLink
              to={`${nav.link}`}
              className={({ isActive }) =>
                isActive
                  ? 'text-white w-full  bg-gradient-to-r from-primary to-light-grey font-[900] flex items-center gap-4 text-[1.2rem ] p-2 rounded-md'
                  : 'text-gray-400 bg-grey flex items-center gap-4 text-[1.2rem ]  mx-auto p-2  rounded-md'
              }
            >
              <span className="text-[.8rem] lg:text-[1.2rem] font-semibold">
                {nav.icon}
              </span>
              {nav.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
