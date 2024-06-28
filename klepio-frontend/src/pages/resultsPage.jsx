import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import DeskTopGreenBG from "../assets/nonicons/DesktopFullGreenBG.png";
import MobileGreenBG from "../assets/nonicons/MobileFullGreenBG.png";
import { Link } from "react-router-dom";
import { resultDecoder } from "../services/resultDecoder";
const ResultsPage = () => {
  const location=useLocation();
  const navigate=useNavigate();
  console.log(location.state?.prediction)
  const prediction=location.state?.prediction;
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const diagnosis = resultDecoder(prediction);
  return (
    <div className="relative h-full min-h-screen w-full">
      <img
        src={isDesktopOrLaptop ? DeskTopGreenBG : MobileGreenBG}
        alt="bg"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="z-10 flex flex-col gap-4 lg:gap-10 justify-center items-center">
        <p className="mt-12 font-poppins text-xl lg:text-3xl text-center">
          You have been diagnosed with
        </p>
        <h1 className="w-full text-black text-3xl lg:text-7xl font-pontiac font-bold text-center px-2">
          {diagnosis.title}
        </h1>
        <div className=" w-5/6 lg:w-1/2 bg-white rounded-2xl flex justify-center items-center text-black font-poppins text-smmd lg:text-2xl">
          <div className="flex flex-col-reverse lg:flex-row justify-center items-center p-12">
            <p className="text-start">{diagnosis.description}</p>
            <img src={diagnosis.image} width={500} alt="diagram" />
          </div>
        </div>
        <p className=" w-5/6 lg:w-1/2 font-poppins text-xl text-center">
          Although this AI model has astounding accuracy for diagnosis, we
          recommend confirming the diagnosis and seeking further treatment from
          a professional dentist or medical practitioner, Klepio’s results can
          not substitute true diagnosis
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center my-4">
          <button className="bg-black rounded-full my-4 lg:mr-4  px-12 py-4 text-white text-lg">
            <Link to="/diagnose">Retake Test</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
