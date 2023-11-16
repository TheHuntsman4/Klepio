import React from "react";
import { useMediaQuery } from "react-responsive";
import DeskTopGreenBG from "../assets/nonicons/DesktopFullGreenBG.png";
import MobileGreenBG from "../assets/nonicons/MobileFullGreenBG.png";
import { ButtonWithImage } from "../components";
import pain from "../assets/icons/questionnairepng/achingt.png";
import swelling from "../assets/icons/questionnairepng/swellingt.png";
import ulcer from "../assets/icons/questionnairepng/ulcert.png";

const DiagnoseStartPage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  // let answers = {};
  const options = [
    { title: "Pain",
     image: pain 
    },
    {
      title: "Swelling",
      image: swelling,
    },
    { title: "Ulcer", image: ulcer },
  ];
  return (
    <div className="relative h-full min-h-screen w-full">
      <img
        src={isDesktopOrLaptop ? DeskTopGreenBG : MobileGreenBG}
        alt="bg"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <p className="text-3xl font-poppins mb-12">
          1. Which of the following <b>best describes</b> the chief problem you are
          facing?
        </p>
        <div className="w-1/2 grid grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 z-20">
          {options.map((option, key) => {
            return (
              <ButtonWithImage
                id={key}
                title={option.title}
                image={option.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DiagnoseStartPage;
