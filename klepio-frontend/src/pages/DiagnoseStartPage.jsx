import React from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import DeskTopGreenBG from "../assets/nonicons/DesktopFullGreenBG.png";
import MobileGreenBG from "../assets/nonicons/MobileFullGreenBG.png";
import { ButtonWithImage } from "../components";
import options from './options'
import { useNavigate } from "react-router-dom";

const DiagnoseStartPage = () => {
  const navigate=useNavigate();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });
  const [chiefComplaint, setChiefComplaint] = useState("");
  let answers = {};
  const onContinue = () => {
    console.log({
      ...answers,
      "Chief complaint": chiefComplaint,
    });
  };
  const lastOption = options[options.length - 1];
  const NavigatePain=()=>{
    navigate('/diagnose/pain',{state:answers})
  }
  return (
    <div className="relative h-full min-h-screen w-full">
      <img
        src={isDesktopOrLaptop ? DeskTopGreenBG : MobileGreenBG}
        alt="bg"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="w-full h-screen flex flex-col justify-center items-center font-poppins text-black">
        <p className="text-3xl font-poppins mb-12 text-center">
          1. Which of the following <b>best describes</b> the chief problem you
          are facing?
        </p>
        {isDesktopOrLaptop ? (
          <>
            <div className="w-5/6 lg:w-1/2 grid grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 z-20">
              {options.map((option, key) => {
                return (
                  <ButtonWithImage
                    id={key}
                    title={option.title}
                    image={option.image}
                    onClick={() => setChiefComplaint(option.code)}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <>
            <div className="w-5/6 lg:w-1/2 grid grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 z-20">
              {options.slice(0, -1).map((option, key) => {
                return (
                  <ButtonWithImage
                    id={key}
                    title={option.title}
                    image={option.image}
                    onClick={() => setChiefComplaint(option.code)}
                  />
                );
              })}
            </div>
            <div className="w-1/2 flex justify-center items-center p-4">
              <ButtonWithImage
                id="last"
                title={lastOption.title}
                image={lastOption.image}
                onClick={() => setChiefComplaint(lastOption.code)}
              />
            </div>
          </>
        )}
        <button
          className="bg-black lg:my-12 px-12 py-4 rounded-full text-white"
          onClick={onContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default DiagnoseStartPage;
