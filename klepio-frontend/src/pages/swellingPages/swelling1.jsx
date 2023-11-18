import React from "react";
import { useState } from "react";
import { QuestionPage2 } from "../../components";
import options1 from "./swellingOptions/swellingOptions1";
import options2 from "./swellingOptions/swellingOptions2";
import options3 from "./swellingOptions/swellingOptions3";
import { useLocation, useNavigate } from "react-router-dom";

const Swelling1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let answers = location.state?.answers;
  const [pain, setPain] = useState("");
  const [changes, setChanges] = useState("");
  const [normal, setNormal] = useState("");

  const onContinueEnd = () => {
    answers = {
      ...answers,
      "Nature of Pain": "0",
      "Severity of pain": "0",
      "Onset  and mode of pain": "0",
      "Factors which worsens the pain": "0",
      "Is the swelling painful?": pain,
      "Has the swelling changed since it was first noticed? If yes how quickly?":
        changes,
      "Does the swelling changes during normal activities such as eating, speaking, etc?":
        normal,
      "Is the ulcer painful": "0",
      "Is there bleeding from the ulcer": "0",
      "Is there discharge from the ulcer?": "0",
      "Is there a foul smell from the ulcer?": "0",
      "Do the ulcers interfere with daily activities": "0",
      "Has the ulcer changed since first noticed?": "0",
      "Have you had similar ulcers?": "0",
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
    <div className="relative bg-klepio-green h-full min-h-screen">
      <div
        className={`absolute left-0 w-full bg-klepio-green transition-all duration-500 ease-in-out ${
          currentPage === 1 ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <QuestionPage2
          options={options1}
          state={pain}
          setState={setPain}
          onContinue={onContinue}
          question={
            "2. Is the swelling painful?"
          }
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
          question={"4. Does the swelling changes during normal activities such as eating, speaking, etc?"}
        />
      </div>
    </div>
  );
};

export default Swelling1;
