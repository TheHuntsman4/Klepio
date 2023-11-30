import React from "react";
import { useState, useEffect } from "react";
import { QuestionPage1 ,QuestionPage2 } from "../../components";
import { useMediaQuery } from "react-responsive";
import DeskTopGreenBG from "../../assets/nonicons/DesktopFullGreenBG.png";
import MobileGreenBG from "../../assets/nonicons/MobileFullGreenBG.png";
import options from "../../services/ulcerOptions/ulcerOptions1";
import painOptions1 from '../../services/painOptions/pain1Options'
import painOptions2 from '../../services/painOptions/painOptions2'
import painOptions3 from '../../services/painOptions/painOptions3'
import painOptions4 from '../../services/painOptions/painOptions4'
import fetchData from "../../services/fetchData";
import { useLocation, useNavigate } from "react-router-dom";

const Ulcer1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let answers = location.state?.answers;
  const [pain, setPain] = useState("");
  const [nature, setNature] = useState("");
  const [severity, setSeverity] = useState("");
  const [onset, setOnset] = useState("");
  const [worse, setWorse] = useState("");
  const [bleed, setBleed] = useState("");
  const [discharge, setDischarge] = useState("");
  const [smell, setSmell] = useState("");
  const [acitvity, setActivity] = useState("");
  const [changes, setChanges] = useState("");
  const [similar, setSimilar] = useState("");
  const [prediction, setPrediction] = useState();

  const onContinueEnd = async () => {
    answers = {
      ...answers,
      Nature_of_Pain: nature,
      Severity_of_pain: severity,
      Onset_and_mode_of_pain: onset,
      Factors_which_worsens_the_pain: worse,
      Is_the_swelling_painful: "0",
      Has_the_swelling_changed_since_it_was_first_noticed: "0",
      Does_the_swelling_changes_during_normal_activities: "0",
      Is_the_ulcer_painful: pain,
      Is_there_bleeding_from_the_ulcer: bleed,
      Is_there_discharge_from_the_ulcer: discharge,
      Is_there_a_foul_smell_from_the_ulcer: smell,
      Do_the_ulcers_interfere_with_daily_activities: acitvity,
      Has_the_ulcer_changed_since_first_noticed: changes,
      Have_you_had_similar_ulcers: similar,
      Is_there_bleeding_in_the_gums: "0",
      Is_there_pain_in_the_gums: "0",
      If_any_tooth_teeth_is_are_mobile_what_is_the_degree_of_mobility: "0",
    };
    console.log(answers);
    const response = await fetchData(answers);
    setPrediction(response);
  };
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });
  useEffect(() => {
    console.log(prediction);
    if (prediction) {
      navigate("/results", { state: { prediction: prediction } });
    }
  }, [prediction]);
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
          onContinue={onContinue}
          question={"8. Have you had similar ulcers?"}
        />
      </div>
      <div
        className={`absolute left-0 w-full transition-all duration-500 ease-in-out ${
          currentPage === 8 ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <QuestionPage1
          options={painOptions1}
          state={nature}
          setState={setNature}
          onContinue={onContinue}
          question={
            "8. How would you best describe the Nature of the Pain you are experiencing?"
          }
        />
      </div>
      <div
        className={`absolute left-0 w-full transition-all duration-500 ease-in-out ${
          currentPage === 9 ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <QuestionPage1
          options={painOptions2}
          state={nature}
          setState={setSeverity}
          onContinue={onContinue}
          onPrevious={onPrevious}
          question={
            "9. How would you best describe the Severity of the Pain you are experiencing?"
          }
        />
      </div>
      <div
        className={`absolute left-0 w-full transition-all duration-500 ease-in-out ${
          currentPage === 10 ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <QuestionPage1
          options={painOptions3}
          state={nature}
          setState={setOnset}
          onContinue={onContinue}
          question={"10. When did you start experiencing pain?"}
        />
      </div>
      <div
        className={`absolute left-0 w-full transition-all duration-500 ease-in-out ${
          currentPage === 11 ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <QuestionPage2
          options={painOptions4}
          state={nature}
          setState={setWorse}
          onContinue={onContinueEnd}
          question={"11. Which among the following Worsens the Pain?"}
        />
      </div>
    </div>
  );
};

export default Ulcer1;
