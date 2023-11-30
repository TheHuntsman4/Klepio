import React from "react";
import { useState} from "react";
import { QuestionPage2 } from "../../components";
import { useMediaQuery } from "react-responsive";
import DeskTopGreenBG from "../../assets/nonicons/DesktopFullGreenBG.png";
import MobileGreenBG from "../../assets/nonicons/MobileFullGreenBG.png";
import { useLocation, useNavigate } from "react-router-dom";

const Pain1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });
  let answers = location.state?.answers;
  const [key, setKey] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const onContinue = () => {
    if (key === "1") {
      navigate("/diagnose/pain2", { state: { answers: answers } });
    } else {
      navigate("/diagnose/pain3", { state: { answers: answers } });
    }
  };
  const options1 = [
    { title: "From the gums", code: "1" },
    { title: "From the teeth", code: "0" },
  ];

  return (
    <div className="relative h-full min-h-screen w-full">
      <img
        src={isDesktopOrLaptop ? DeskTopGreenBG : MobileGreenBG}
        alt="bg"
        className="absolute top-0 left-0 w-full h-full min-h-screen object-cover -z-10"
      />
      <div
        className={`absolute left-0 w-full transition-all duration-500 ease-in-out ${
          currentPage === 1 ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <QuestionPage2
          options={options1}
          state={key}
          setState={setKey}
          onContinue={onContinue}
          question={
            "2. How would you best describe Where the pain is coming from?"
          }
        />
      </div>
    </div>
  );
};

export default Pain1;
