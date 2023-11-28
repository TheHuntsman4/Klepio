import React from "react";
import { useState } from "react";
import { QuestionPage2 } from "../../components";
import { useMediaQuery } from "react-responsive";
import DeskTopGreenBG from "../../assets/nonicons/DesktopFullGreenBG.png";
import MobileGreenBG from "../../assets/nonicons/MobileFullGreenBG.png";
import options1 from "../../services/swellingOptions/swellingOptions1";
import options2 from "../../services/swellingOptions/swellingOptions2";
import options3 from "../../services/swellingOptions/swellingOptions3";
import { useLocation, useNavigate } from "react-router-dom";

const Swelling1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let answers = location.state?.answers;
  const [pain, setPain] = useState("");
  const [changes, setChanges] = useState("");
  const [normal, setNormal] = useState("");
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const onContinueEnd = () => {
    answers = {
      ...answers,
      "Nature_of_Pain": "0",
      "Severity_of_pain": "0",
      "Onset_and_mode_of_pain": "0",
      "Factors_which_worsens_the_pain": "0",
      "Is_the_swelling_painful": pain,
      "Has_the_swelling_changed_since_it_was_first_noticed": changes,
      "Does_the_swelling_changes_during_normal_activities": normal,
      "Is_the_ulcer_painful": "0",
      "Is_there_bleeding_from_the_ulcer": "0",
      "Is_there_discharge_from_the_ulcer": "0",
      "Is_there_a_foul_smell_from_the_ulcer": "0",
      "Do_the_ulcers_interfere_with_daily_activities": "0",
      "Has_the_ulcer_changed_since_first_noticed": "0",
      "Have_you_had_similar_ulcers": "0"
    };
    console.log(answers);
    navigate("/diagnose/common", { state: { answers: answers } });
  };

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
          options={options1}
          state={pain}
          setState={setPain}
          onContinue={onContinue}
          question={"2. Is the swelling painful?"}
        />
      </div>
      <div
        className={`absolute left-0 w-full transition-all duration-500 ease-in-out ${
          currentPage === 2 ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <QuestionPage2
          options={options2}
          state={changes}
          setState={setChanges}
          onContinue={onContinue}
          onPrevious={onPrevious}
          question={
            "3. Has the swelling changed since it was first noticed? If yes how quickly?"
          }
        />
      </div>
      <div
        className={`absolute left-0 w-full transition-all duration-500 ease-in-out ${
          currentPage === 3 ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <QuestionPage2
          options={options3}
          state={normal}
          setState={setNormal}
          onContinue={onContinueEnd}
          question={
            "4. Does the swelling changes during normal activities such as eating, speaking, etc?"
          }
        />
      </div>
    </div>
  );
};

export default Swelling1;
