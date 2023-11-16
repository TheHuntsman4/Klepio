import React from "react";
import { useMediaQuery } from "react-responsive";
import DeskTopGreenBG from "../assets/nonicons/DesktopFullGreenBG.png";
import MobileGreenBG from "../assets/nonicons/MobileFullGreenBG.png";
import { ButtonWithImage } from "../components";

const DiagnoseStartPage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  let answers = {};
  const options=[{title:"Pain", image:"../"}]
  return (
    <div className="relative h-full min-h-screen w-full">
      <img
        src={isDesktopOrLaptop ? DeskTopGreenBG : MobileGreenBG}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="w-full h-full flex flex-col justify-center items-center">
        <p className="text-xl font-poppins">
          Which of the following <b>best describes</b> the chief problem you are
          facing?
        </p>

      </div>
    </div>
  );
};

export default DiagnoseStartPage;
