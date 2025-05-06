import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { chipsData } from './homeData';

export default function Chips() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get('filter')) {
      setSearchParams({ filter: 'matches' });
    }
  }, []);

  return (
    <nav className="relative flex items-center justify-evenly">
      {chipsData.map((item) => {
        return (
          <button
            key={item.id}
            className={`px-4 lg:px-6 capitalize text-[.8rem] md:text-[1rem] font-[600] py-1 rounded-xl ${
              searchParams.get('filter') == item.name
                ? 'border-b-[3px] border-primary'
                : 'border-b-[3px] border-transparent'
            }
            hover:bg-hover transition duration-75
            `}
            onClick={() => setSearchParams({ filter: item.name })}
          >
            {item.name}
          </button>
        );
      })}
    </nav>
  );
}
