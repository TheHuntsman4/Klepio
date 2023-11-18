import React from "react";
import { useState } from "react";
import { QuestionPage2 } from "../../components";
import { useMediaQuery } from "react-responsive";
import DeskTopGreenBG from "../../assets/nonicons/DesktopFullGreenBG.png";
import MobileGreenBG from "../../assets/nonicons/MobileFullGreenBG.png";
import options from "./ulcerOptions/ulcerOptions1";

import { useLocation, useNavigate } from "react-router-dom";

const Ulcer1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let answers = location.state?.answers;
  const [pain, setPain] = useState("");
  const [bleed, setBleed] = useState("");
  const [discharge, setDischarge] = useState("");
  const [smell, setSmell] = useState("");
  const [acitvity, setActivity] = useState("");
  const [changes, setChanges] = useState("");
  const [similar, setSimilar] = useState("");

  const onContinueEnd = () => {
    answers = {
      ...answers,
      "Nature of Pain": "0",
      "Severity of pain": "0",
      "Onset  and mode of pain": "0",
      "Factors which worsens the pain": "0",
      "Is the swelling painful?": "0",
      "Has the swelling changed since it was first noticed? If yes how quickly?":
        "0",
      "Does the swelling changes during normal activities such as eating, speaking, etc?":
        "0",
      "Is the ulcer painful": pain,
      "Is there bleeding from the ulcer": bleed,
      "Is there discharge from the ulcer?": discharge,
      "Is there a foul smell from the ulcer?": smell,
      "Do the ulcers interfere with daily activities": acitvity,
      "Has the ulcer changed since first noticed?": changes,
      "Have you had similar ulcers?": similar,
    };
    console.log(answers);
    navigate("/diagnose/common", { state: { answers: answers } });
  };
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const onContinue = () => {
    setCurrentPage(currentPage + 1);
  };
  const onPrevious = () => {
    console.log("Previous");
  };
  return (
    <div className="relative h-full min-h-screen">
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
          options={options}
          state={pain}
          setState={setPain}
          onContinue={onContinue}
          question={"2. Is the ulcer painful?"}
        />
      </div>
      <div
        className={`absolute left-0 w-full transition-all duration-500 ease-in-out ${
          currentPage === 2 ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <QuestionPage2
          options={options}
          state={bleed}
          setState={setBleed}
          onContinue={onContinue}
          onPrevious={onPrevious}
          question={"3. Is there bleeding from the ulcer?"}
        />
      </div>
      <div
        className={`absolute left-0 w-full transition-all duration-500 ease-in-out ${
          currentPage === 3 ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <QuestionPage2
          options={options}
          state={discharge}
          setState={setDischarge}
          onContinue={onContinue}
          question={"4. Is there discharge from the ulcer?"}
        />
      </div>
      <div
        className={`absolute left-0 w-full transition-all duration-500 ease-in-out ${
          currentPage === 4 ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <QuestionPage2
          options={options}
          state={smell}
          setState={setSmell}
          onContinue={onContinue}
          question={"5. Is there foul smell from the ulcer?"}
        />
      </div>
      <div
        className={`absolute left-0 w-full transition-all duration-500 ease-in-out ${
          currentPage === 5 ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <QuestionPage2
          options={options}
          state={acitvity}
          setState={setActivity}
          onContinue={onContinue}
          question={"6. Do the ulcers interfere with daily activities?"}
        />
      </div>
      <div
        className={`absolute left-0 w-full transition-all duration-500 ease-in-out ${
          currentPage === 6 ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <QuestionPage2
          options={options}
          state={changes}
          setState={setChanges}
          onContinue={onContinue}
          question={"7. Has the ulcer changed since it was first noticed?"}
        />
      </div>
      <div
        className={`absolute left-0 w-full transition-all duration-500 ease-in-out ${
          currentPage === 7 ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <QuestionPage2
          options={options}
          state={similar}
          setState={setSimilar}
          onContinue={onContinueEnd}
          question={"8. Have you had similar ulcers?"}
        />
      </div>
    </div>
  );
};

export default Ulcer1;
