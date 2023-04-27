import React from "react";
import { useNavigate } from "react-router-dom";
import HeroImage from "../../../assets/svg/Soccer-amico.svg";

export default function () {
  const navigate = useNavigate()
  return <section className="md:h-[20rem] w-[95%] relative  mx-auto py-2 flex items-stretch bg-primary rounded-md md:rounded-lg">
    <div className="basis-2/2 md:basis-1/2 text-[1.5rem] md:text-[3rem] relative font-inter flex-1 leading-12 px-4 mt-4">
      <p>Organise and manage <br /> Footbal matches</p>
      <button className="bg-white text-primary text-[1rem] md:text-[1.4rem] px-4 py-2 mt-8 rounded-lg shadow-2xl font-[700]"
      onClick={()=>navigate("/dashboard/matches")}
      >Create Match</button>
    </div>
    <div className="basis-1/2 hidden lg:block flex-1 relative h-full"><img src={HeroImage} alt="" className="h-[100%] w-[100%]  "/>
</div>
  </section>;
}
