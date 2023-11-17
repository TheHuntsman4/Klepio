import React from "react";
import { useState } from "react";
import { QuestionPage1, QuestionPage2 } from "../../components";
import options1 from "./painOptions/pain1Options";
import options2 from "./painOptions/painOptions2";
import options3 from "./painOptions/painOptions3";
import options4 from "./painOptions/painOptions4";
import { useMediaQuery } from "react-responsive";
import DeskTopGreenBG from "../../assets/nonicons/DesktopFullGreenBG.png";
import MobileGreenBG from "../../assets/nonicons/MobileFullGreenBG.png";
import { useLocation, useNavigate } from "react-router-dom";

const Pain1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let answers = location.state?.answers;
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });
  const [nature, setNature] = useState("");
  const [severity, setSeverity] = useState("");
  const [onset, setOnset] = useState("");
  const [worse, setWorse] = useState("");

  const onContinue1 = () => {
    answers = { ...answers, "Nature of Pain": nature };
    console.log(answers);
  };
  const onContinue2 = () => {
    answers = { ...answers, "Nature of Pain": nature };
    console.log(answers);
  };
  const onContinue3 = () => {
    answers = { ...answers, "Nature of Pain": nature };
    console.log(answers);
  };
  const onContinue4 = () => {
    answers = { ...answers, "Nature of Pain": nature };
    console.log(answers);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const onContinue = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <div className="relative bg-klepio-green h-screen">
      <div
        className={`absolute left-0 w-full bg-klepio-green transition-all duration-500 ease-in-out ${
          currentPage === 1 ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <QuestionPage1
          options={options1}
          state={nature}
          setState={setNature}
          onContinue={onContinue}
          question={
            "2. How would you best describe the Nature of the Pain you are experiencing?"
          }
        />
      </div>
      <div
        className={`absolute left-0 w-full transition-all duration-500 ease-in-out ${
          currentPage === 2 ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <QuestionPage1
          options={options2}
          state={nature}
          setState={setSeverity}
          onContinue={onContinue}
          question={
            "3. How would you best describe the Severity of the Pain you are experiencing?"
          }
        />
      </div>
      <div
        className={`absolute left-0 w-full transition-all duration-500 ease-in-out ${
          currentPage === 3 ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <QuestionPage1
          options={options3}
          state={nature}
          setState={setOnset}
          onContinue={onContinue}
          question={"4. When did you start experiencing pain?"}
        />
      </div>
      <div
        className={`absolute left-0 w-full transition-all duration-500 ease-in-out ${
          currentPage === 4 ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <QuestionPage2
          options={options4}
          state={nature}
          setState={setWorse}
          onContinue={onContinue}
          question={"5. Which among the following Worsens the Pain?"}
        />
      </div>
    </div>
  );
};

export default Pain1;
