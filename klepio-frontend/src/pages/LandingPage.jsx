import React from "react";
import { useMediaQuery } from "react-responsive";
import LandingBGDesktop from "../assets/nonicons/DesktopLandingBG2.png";
import LandingBGMobile from "../assets/nonicons/MobileLandingBG.png";
import KlepioLogo from "../assets/nonicons/KlepioLogoBlack.svg";
import { Link } from "react-router-dom";
import { NavBar } from "../components";

const LandingPage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      <div className="relative h-screen w-full">
        <img
          src={isDesktopOrLaptop ? LandingBGDesktop : LandingBGMobile}
          className="absolute top-0 left-0 w-full h-screen object-cover -z-10"
        />
        <div className="w-full h-screen flex flex-col justify-center items-center z-10 text-black mt-12 md:mt-2">
          <img
            src={KlepioLogo}
            alt="Logo"
            width={isDesktopOrLaptop ? 950 : 300}
          />
          <div className="text-center font-poppins text-2xl md:text-4xl mt-4 md:mt-16">
            Dental care that’s always one step ahead
          </div>
          <div className="w-full flex lg:flex-row flex-col-reverse justify-center items-center">
            <button className="mt-12 bg-black rounded-full px-12 py-4 text-white">
              <Link to="/home">Home</Link>
            </button>
            <button className="mt-12 bg-black rounded-full px-12 py-4 text-white">
              <Link to="/diagnose">Start Diagnosis</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
