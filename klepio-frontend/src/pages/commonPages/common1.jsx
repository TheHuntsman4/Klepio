import React from "react";
import { useState } from "react";
import axios from "axios";
import { QuestionPage1, QuestionPage2 } from "../../components";
import { useMediaQuery } from "react-responsive";
import DeskTopGreenBG from "../../assets/nonicons/DesktopFullGreenBG.png";
import MobileGreenBG from "../../assets/nonicons/MobileFullGreenBG.png";
import options1 from "./commonOptions/commonOptions1";
import options2 from "./commonOptions/commonOptions2";
import { useLocation, useNavigate } from "react-router-dom";

const Common1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let answers = location.state?.answers;
  const [pain, setPain] = useState("");
  const [bleed, setBleed] = useState("");
  const [mobile, setMobile] = useState("");
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    console.log("useEffect is running");
    try {
      const response = await axios.post(
        "https://klepio-backend-experimental.onrender.com/predict",
        answers
      );
      const prediction = response.data.prediction;
      console.log(prediction);
      navigate("/results", { state: { prediction: prediction } });
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const onContinueEnd = async () => {
    answers = {
      ...answers,
      "Is_there_bleeding_in_the_gums": bleed,
      "Is_there_pain_in_the_gums": pain,
      "If_any_tooth_teeth_is_are_mobile_what_is_the_degree_of_mobility":
        mobile,
    };
    console.log("entering fetchData");
    fetchData();

    console.log(answers);
  };

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
        <QuestionPage2
          options={options1}
          state={pain}
          setState={setPain}
          onContinue={onContinue}
          question={"2. Is there pain in the gums?"}
        />
      </div>
      <div
        className={`absolute left-0 w-full transition-all duration-500 ease-in-out ${
          currentPage === 2 ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <QuestionPage2
          options={options1}
          state={bleed}
          setState={setBleed}
          onContinue={onContinue}
          onPrevious={onPrevious}
          question={"3.Is there bleeding in the gums?"}
        />
      </div>
      <div
        className={`absolute left-0 w-full transition-all duration-500 ease-in-out ${
          currentPage === 3 ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <QuestionPage1
          options={options2}
          state={mobile}
          setState={setMobile}
          onContinue={onContinueEnd}
          question={
            "4. If any tooth/teeth is/are mobile, what is the degree of mobility?"
          }
        />
      </div>
    </div>
  );
};

export default Common1;
