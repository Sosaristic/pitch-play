import React, { useState, useRef } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { HiPlus } from "react-icons/hi";

import { PopOver, UserHasNoTeam } from "../../UI";
import CreateMatchModal from "./CreateMatchModal";
import useClickAwayListener from "../../../hooks/useClickAway";
import { useAppContext } from "../../../context/AppContext";

const links = [
  { id: 1, name: "live", url: "/dashboard/matches" },
  { id: 2, name: "results", url: "/dashboard/matches/results" },
  { id: 3, name: "fixtures", url: "/dashboard/matches/fixtures" },
];

export default function MatchRoute() {
  const {userHasTeam} = useAppContext()
  const navigate = useNavigate();
  const modalRef = useRef();
  const { pathname } = useLocation();

  const [openPopOver, setOpenPopOver] = useState(false);
  useClickAwayListener(modalRef, closeModal);

  function closeModal() {
    setOpenPopOver(false);
  }
  const handleModalDisplay = () => {
    setOpenPopOver(true);
  };

  const handleMatchCard = (id) => {
    navigate(`/dashboard/matches/live/${id}`);
  };

  function checkPath() {
    if (
      pathname == "/dashboard/matches" ||
      pathname == "/dashboard/matches/results" ||
      pathname == "/dashboard/matches/fixtures"
    ) {
      return true;
    } else {
      return false;
    }
  }

if(!userHasTeam){
  return <div><UserHasNoTeam /></div>
}

  return (
    <div className="flex flex-col">
      {checkPath() && (
        <nav className={` gap-4 font-poppins mb-2 px-2 flex`}>
          {links.map((item) => {
            return (
              <Link
                to={item.url}
                key={item.id}
                className={`capitalize  border-b  px-2 py-1 rounded-md ${
                  pathname == item.url ? "border-primary text-primary" : null
                } `}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      )}
      {checkPath() && (
        <button
          className="flex items-center self-end mr-2 px-2 py-2 my-2 rounded-sm bg-primary"
          onClick={handleModalDisplay}
        >
          <span className="text-[1.2rem]">
            <HiPlus />
          </span>{" "}
          Create Match
        </button>
      )}

      <Outlet />
      {openPopOver && (
        <PopOver>
          <CreateMatchModal modalRef={modalRef} closeModal={closeModal} friendlyModal={true} />
        </PopOver>
      )}
    </div>
  );
}
