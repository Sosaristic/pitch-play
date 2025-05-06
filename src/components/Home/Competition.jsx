import React, { useEffect, useMemo } from 'react';
import { FootballTable, Table } from '../UI';
import {
  useSearchParams,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';

const topAssists = ['No', 'Player', 'Street', 'Assists'];
const topScorers = ['No', 'Player', 'Street', 'Goals'];

const navData = [
  {
    id: 1,
    title: 'Table',
    link: 'table',
  },
  {
    id: 2,
    title: 'Top Scorers',
    link: 'top-scorers',
  },
  {
    id: 3,
    title: 'Top Assists',
    link: 'top-assists',
  },
];

const lists = [
  { id: 1, name: 'Anderson', street: 'ugwu', value: 10 },
  { id: 2, name: 'sunday Omena', street: 'Aka', value: 7 },
  { id: 3, name: 'Sosaristic', street: 'Okpokpo', value: 5 },
];

function Competition() {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const currentParams = useMemo(() => {
    return Object.fromEntries(searchParams.entries());
  }, [searchParams]);

  useEffect(() => {
    if (!currentParams['type']) {
      navigate({
        pathname: window.location.pathname,
        search: `?${new URLSearchParams({
          ...currentParams,
          type: 'table',
        }).toString()}`,
      });
    }
  }, []);
  const handleShallowRoute = (path) => {
    navigate({
      pathname: window.location.pathname,
      search: `?${new URLSearchParams({
        ...currentParams,
        type: path,
      }).toString()}`,
    });
  };

  return (
    <div>
      <ul className="flex gap-4 px-4">
        {navData.map((item) => {
          return (
            <li
              key={item.id}
              className={`cursor-pointer ${
                currentParams['type'] === item.link
                  ? 'border-b-[3px] border-primary'
                  : 'border-b-[3px] border-transparent'
              } py-1 text-[.8rem] lg:text-[1rem] font-[600]`}
              onClick={() => handleShallowRoute(item.link)}
            >
              {item.title}
            </li>
          );
        })}
      </ul>

      {currentParams['type'] === 'table' && (
        <>
          <FootballTable group={'Group A'} />
          <FootballTable group={'Group B'} />
        </>
      )}

      {currentParams['type'] === 'top-scorers' && (
        <>
          <Table headers={topScorers} body={lists} />
        </>
      )}

      {currentParams['type'] === 'top-assists' && (
        <>
          <Table headers={topAssists} body={lists} />
        </>
      )}
    </div>
  );
}

export default Competition;
