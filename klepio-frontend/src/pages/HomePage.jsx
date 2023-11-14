import React from "react";
import TeethSVG from "../assets/icons/Teeth.svg";
import SinglePhone from "../assets/nonicons/SinglePhone.png";

const HomePage = () => {
  return (
    <div className="h-full w-full bg-klepio-green">
      <div className="grid grid-cols-2 gap-4 justify-center items-center h-full w-full">
        <div className="w-full h-screen flex flex-col justify-center items-center font-pontiac text-[4rem] text-center">
          <p className="text-start">
            Dental care
            <br />
            thats always
            <br />
            one step ahead.
          </p>
          <div className="w-1/2 pt-4 flex justify-start items-start">
            <button className="w-1/2 px-12 py-4 rounded-full bg-black text-white text-lg">
              Try it out today
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <img src={TeethSVG} alt="teeth" width={450} className="p-4" />
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <img src={SinglePhone} alt="teeth" className="" />
        </div>
        <div className="w-full flex flex-col justify-center items-center font-pontiac text-[4rem] text-center">
          <p className="text-end">

          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
