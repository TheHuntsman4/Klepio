import React from "react";
import { useState } from "react";
import { QuestionPage2 } from "../../components";
import { useMediaQuery } from "react-responsive";
import DeskTopGreenBG from "../../assets/nonicons/DesktopFullGreenBG.png";
import MobileGreenBG from "../../assets/nonicons/MobileFullGreenBG.png";
import options from "../../services/ulcerOptions/ulcerOptions1";
import fetchData from "../../services/fetchData";
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
      "Nature_of_Pain": "0",
      "Severity_of_pain": "0",
      "Onset_and_mode_of_pain": "0",
      "Factors_which_worsens_the_pain": "0",
      "Is_the_swelling_painful": "0",
      "Has_the_swelling_changed_since_it_was_first_noticed": "0",
      "Does_the_swelling_changes_during_normal_activities": "0",
      "Is_the_ulcer_painful": pain,
      "Is_there_bleeding_from_the_ulcer": bleed,
      "Is_there_discharge_from_the_ulcer": discharge,
      "Is_there_a_foul_smell_from_the_ulcer": smell,
      "Do_the_ulcers_interfere_with_daily_activities": acitvity,
      "Has_the_ulcer_changed_since_first_noticed": changes,
      "Have_you_had_similar_ulcers": similar,
      "Is_there_bleeding_in_the_gums": "0",
      "Is_there_pain_in_the_gums": "0",
      "If_any_tooth_teeth_is_are_mobile_what_is_the_degree_of_mobility": "0",
    };
    console.log(answers);
    let results=fetchData(answers);
    console.log(results)
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
