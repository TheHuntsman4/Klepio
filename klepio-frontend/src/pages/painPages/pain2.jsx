import React from "react";
import { useState, useEffect } from "react";
import { QuestionPage1, QuestionPage2 } from "../../components";
import { useMediaQuery } from "react-responsive";
import DeskTopGreenBG from "../../assets/nonicons/DesktopFullGreenBG.png";
import MobileGreenBG from "../../assets/nonicons/MobileFullGreenBG.png";
import options1 from "../../services/painOptions/pain1Options";
import options2 from "../../services/painOptions/painOptions2";
import options3 from "../../services/painOptions/painOptions3";
import options4 from "../../services/painOptions/painOptions4";
import options5 from "../../services/commonOptions/commonOptions1";
import options6 from "../../services/commonOptions/commonOptions2";
import { useLocation, useNavigate } from "react-router-dom";
import fetchData from "../../services/fetchData";

const Pain2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });
  let answers = location.state?.answers;
  const [nature, setNature] = useState("");
  const [severity, setSeverity] = useState("");
  const [onset, setOnset] = useState("");
  const [worse, setWorse] = useState("");
  const [pain, setPain] = useState("");
  const [bleed, setBleed] = useState("");
  const [mobile, setMobile] = useState("");
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
      Is_the_ulcer_painful: "0",
      Is_there_bleeding_from_the_ulcer: "0",
      Is_there_discharge_from_the_ulcer: "0",
      Is_there_a_foul_smell_from_the_ulcer: "0",
      Do_the_ulcers_interfere_with_daily_activities: "0",
      Has_the_ulcer_changed_since_first_noticed: "0",
      Have_you_had_similar_ulcers: "0",
      Is_there_bleeding_in_the_gums: bleed,
      Is_there_pain_in_the_gums: pain,
      If_any_tooth_teeth_is_are_mobile_what_is_the_degree_of_mobility: mobile,
    };
    console.log(answers);
    const response = await fetchData(answers);
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
          state={severity}
          setState={setSeverity}
          onContinue={onContinue}
          onPrevious={onPrevious}
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
          state={onset}
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
          state={worse}
          setState={setWorse}
          onContinue={onContinue}
          question={"5. Which among the following Worsens the Pain?"}
        />
      </div>
      <div
        className={`absolute left-0 w-full transition-all duration-500 ease-in-out ${
          currentPage === 5 ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <QuestionPage2
          options={options5}
          state={pain}
          setState={setPain}
          onContinue={onContinue}
          question={"6. Is there pain in the gums?"}
        />
      </div>
      <div
        className={`absolute left-0 w-full transition-all duration-500 ease-in-out ${
          currentPage === 6 ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <QuestionPage2
          options={options5}
          state={bleed}
          setState={setBleed}
          onContinue={onContinue}
          onPrevious={onPrevious}
          question={"7.Is there bleeding in the gums?"}
        />
      </div>
      <div
        className={`absolute left-0 w-full transition-all duration-500 ease-in-out ${
          currentPage === 7 ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <QuestionPage1
          options={options6}
          state={mobile}
          setState={setMobile}
          onContinue={onContinueEnd}
          question={
            "8. If any tooth/teeth is/are mobile, what is the degree of mobility?"
          }
        />
      </div>
    </div>
  );
};

export default Pain2;
