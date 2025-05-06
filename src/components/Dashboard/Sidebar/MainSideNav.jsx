import React from 'react';
import Header from '../../Layout/Header';
import { Link } from 'react-router-dom';
import SideBarLinks from './SideBarLinks';

export default function MainSideNav({ isCompetition }) {
  return (
    <aside className="relative flex flex-col items-center px-2">
      <div className="relative w-full">
        <Link
          to="/"
          className="font-righteous text-primary text-[2rem] lg:text-[2rem]"
        >
          PitchPlay
        </Link>
      </div>
      <div className="w-full mt-12">
        <SideBarLinks isCompetition={isCompetition} />
      </div>
    </aside>
  );
}
