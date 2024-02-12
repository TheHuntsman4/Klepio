import React from "react";
import TeethSVG from "../assets/icons/Teeth.svg";
import SinglePhone from "../assets/nonicons/SinglePhone.png";

const HomePage = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center bg-klepio-green">
      <div className="w-full flex flex-col lg:flex-row-reverse justify-center items-center">
        <div className="w-full flex justify-center items-center p-4">
          <img src={TeethSVG} alt="Teeth" width={250} className="md:width-600"/>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center font-pontiac text-3xl lg:text-8xl">
          <p className="text-center lg:text-start">
            Dental care
            <br />
            thats always
            <br />
            one step ahead.
          </p>
          <button className="w-1/2 lg:w-1/2 mt-6 bg-black text-white rounded-full px-6 lg:px-12 py-2 text-sm ">
            Try It Out Today
          </button> 
        </div>
      </div>
    </div>
  );
};

export default HomePage;
