import React from "react";
import { useMediaQuery } from "react-responsive";
import DeskTopGreenBG from "../assets/nonicons/DesktopFullGreenBG.png";
import MobileGreenBG from "../assets/nonicons/MobileFullGreenBG.png";
import results from "../services/resultArray";
const ResultsPage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const diagnosis = results[3];
  // console.log(results[0]);
  return (
    <div className="relative h-screen w-full">
      <img
        src={isDesktopOrLaptop ? DeskTopGreenBG : MobileGreenBG}
        className="absolute top-0 left-0 w-full h-screen object-cover -z-10"
      />
      <div className="z-10 flex flex-col gap-12 justify-center items-center">
        <p className="mt-12 font-poppins text-3xl text-center">
          You have been diagnosed with
        </p>
        <h1 className="w-full text-black text-7xl font-pontiac font-bold text-center">
          {diagnosis.title}
        </h1>
        <div className="w-1/2 bg-white rounded-2xl flex justify-center items-center text-black font-poppins text-2xl">
          <div className="flex justify-center items-center p-12">
            <p className="text-start">{diagnosis.description}</p>
            <img src={diagnosis.image} width={500} />
          </div>
        </div>
        <p className="w-1/2 font-poppins text-xl text-center">
          Although this AI model has astounding accuracy for diagnosis, we
          recommend confirming the diagnosis and seeking further treatment from
          a professional dentist or medical practitioner, Klepio’s results can
          not substitute true diagnosis
        </p>
      </div>
    </div>
  );
};

export default ResultsPage;
