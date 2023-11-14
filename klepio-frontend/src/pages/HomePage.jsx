import React from "react";
import './home.css';
import TeethSVG from "../assets/icons/Teeth.svg";
import SinglePhone from "../assets/nonicons/SinglePhone.png";

const HomePage = () => {
  return (
    // <div className="h-full w-full bg-klepio-green">
    //   <div className="grid grid-cols-2 gap-4 justify-center items-center h-full w-full">
    //     <div className="w-full h-screen flex flex-col justify-center items-center font-pontiac text-8xl text-center">
    //       <p className="text-start">
    //          Dental care
    //          <br />
    //          thats always
    //          <br />
    //          one step ahead.
    //       </p>
    //       <div className="w-1/2 mt-12 flex justify-start items-start">
    //         <button className="w-1/2 px-12 py-4 rounded-full bg-black text-white text-lg">
    //           Try it out today
    //         </button>
    //       </div>
    //     </div>
    //     <div className="w-full flex flex-col justify-center items-center">
    //       <img src={TeethSVG} alt="teeth" width={600} className=" " />
    //     </div>
    //     <div className="w-full flex flex-col justify-center items-center">
    //       <img src={SinglePhone} alt="teeth" width={1600} className="" />
    //     </div>
    // <div className="w-full flex flex-col justify-center items-center font-pontiac text-center">
    //   <div className="w-1/2">
    //     <p className="text-end">
    //       <h2 className="text-7xl font-semibold">POWERED BY DentAI</h2>
    //       <p className="mt-4 text-2xl font-poppins">
    //         With the power of <b>DentAI</b>, Klepio’s 10-step questionnaire
    //         can help filter out most of your doubts, so you can approach
    //         your dentist better.
    //       </p>
    //     </p>
    //   </div>
    // </div>
    //   </div>
    // </div>
    <div className="h-full w-full flex flex-col justify-center items-center bg-klepio-green">
      {/* This is the component */}
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
