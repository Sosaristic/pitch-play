import React, { useState } from "react";
import { IoMdShirt } from "react-icons/io";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

import { faculty, department } from "../Dashboard/dashboardData";

const Carousel = ({ data, shirt, text, handleCarouselValues, type }) => {
  const [index, setIndex] = useState(0);
  const handleIndex = (index) => {
    if (index < 0 || index > data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index);
    }
    if(shirt){

      handleCarouselValues(data[index].title, type)
    }
  };
  return (
    <div className=" w-full h-full flex team-selector">
      {data?.map((item) => (
        <div
          key={item.id}
          className={`flex justify-center text-gray-500`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {shirt && (
            <div className="flex flex-col items-center">
              <div className="text-[5rem] " style={{ color: item.teamColor }}>
                <IoMdShirt />
              </div>
              <div className="text-primary">{item.title}</div>
            </div>
          )}
          {text && <div className="font-[600] text-primary">{item.title}</div>}
        </div>
      ))}
      <button
        type="button"
        className="absolute top-[50%] text-primary translate-y-[-50%] right-4 text-[1.5rem]"
        onClick={() => handleIndex(index + 1)}
      >
        <MdArrowForwardIos />
      </button>
      <button
        type="button"
        className="absolute top-[50%] text-primary translate-y-[-50%] left-4 text-[1.5rem]"
        onClick={() => handleIndex(index - 1)}
      >
        <MdArrowBackIos />
      </button>
    </div>
  );
};

export default function TeamSelector({handleCarouselValues, type}) {

 
  return (
    <div className="flex flex-col w-[15rem] border rounded-md">
      {/* first carousel */}
      <div className=" flex px-1 py-2 items-center border-b bg-gray-900">
        <Carousel data={faculty} text={true} handleCarouselValues={handleCarouselValues} type={type}/>
      </div>
      {/* second carousel */}
      <div className="h-[7rem] relative">
        <Carousel data={department} shirt={true} handleCarouselValues={handleCarouselValues} type={type}/>
      </div>
    </div>
  );
}
