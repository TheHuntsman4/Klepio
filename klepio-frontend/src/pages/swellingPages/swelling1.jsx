import React from "react";
import { useState,useEffect } from "react";
import { QuestionPage1,QuestionPage2 } from "../../components";
import { useMediaQuery } from "react-responsive";
import DeskTopGreenBG from "../../assets/nonicons/DesktopFullGreenBG.png";
import MobileGreenBG from "../../assets/nonicons/MobileFullGreenBG.png";
import options1 from "../../services/swellingOptions/swellingOptions1";
import options2 from "../../services/swellingOptions/swellingOptions2";
import options3 from "../../services/swellingOptions/swellingOptions3";
import painOptions1 from '../../services/painOptions/pain1Options'
import painOptions2 from '../../services/painOptions/painOptions2'
import painOptions3 from '../../services/painOptions/painOptions3'
import painOptions4 from '../../services/painOptions/painOptions4'
import { useLocation, useNavigate } from "react-router-dom";
import fetchData from "../../services/fetchData";

const Swelling1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let answers = location.state?.answers;
  const [nature, setNature] = useState("");
  const [severity, setSeverity] = useState("");
  const [onset, setOnset] = useState("");
  const [worse, setWorse] = useState("");
  const [pain, setPain] = useState("");
  const [changes, setChanges] = useState("");
  const [normal, setNormal] = useState("");
  const [prediction, setPrediction] = useState();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const onContinueEnd = async () => {
    answers = {
      ...answers,
      Nature_of_Pain: nature,
      Severity_of_pain: severity,
      Onset_and_mode_of_pain: onset,
      Factors_which_worsens_the_pain: worse,
      Is_the_swelling_painful: pain,
      Has_the_swelling_changed_since_it_was_first_noticed: changes,
      Does_the_swelling_changes_during_normal_activities: normal,
      Is_the_ulcer_painful: "0",
      Is_there_bleeding_from_the_ulcer: "0",
      Is_there_discharge_from_the_ulcer: "0",
      Is_there_a_foul_smell_from_the_ulcer: "0",
      Do_the_ulcers_interfere_with_daily_activities: "0",
      Has_the_ulcer_changed_since_first_noticed: "0",
      Have_you_had_similar_ulcers: "0",
      Is_there_bleeding_in_the_gums: "0",
      Is_there_pain_in_the_gums: "0",
      If_any_tooth_teeth_is_are_mobile_what_is_the_degree_of_mobility: "0",
    };
    console.log(answers);
    const response = await fetchData(answers);
    console.log(response)
    setPrediction(response);
  };
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
          onContinue={onContinue}
          question={
            "4. Does the swelling changes during normal activities such as eating, speaking, etc?"
          }
        />
      </div>
      <div
        className={`absolute left-0 w-full transition-all duration-500 ease-in-out ${
          currentPage === 4 ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <QuestionPage1
          options={painOptions1}
          state={nature}
          setState={setNature}
          onContinue={onContinue}
          question={
            "5. How would you best describe the Nature of the Pain you are experiencing?"
          }
        />
      </div>
      <div
        className={`absolute left-0 w-full transition-all duration-500 ease-in-out ${
          currentPage === 5 ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <QuestionPage1
          options={painOptions2}
          state={nature}
          setState={setSeverity}
          onContinue={onContinue}
          onPrevious={onPrevious}
          question={
            "6. How would you best describe the Severity of the Pain you are experiencing?"
          }
        />
      </div>
      <div
        className={`absolute left-0 w-full transition-all duration-500 ease-in-out ${
          currentPage === 6 ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <QuestionPage1
          options={painOptions3}
          state={nature}
          setState={setOnset}
          onContinue={onContinue}
          question={"7. When did you start experiencing pain?"}
        />
      </div>
      <div
        className={`absolute left-0 w-full transition-all duration-500 ease-in-out ${
          currentPage === 7 ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <QuestionPage2
          options={painOptions4}
          state={nature}
          setState={setWorse}
          onContinue={onContinueEnd}
          question={"8. Which among the following Worsens the Pain?"}
        />
      </div>
    </div>
  );
};

export default Swelling1;
