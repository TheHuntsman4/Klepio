import React from "react";
import { useState } from "react";
import { QuestionPage1,QuestionPage2 } from "../../components";
import options1 from "./painOptions/pain1Options";
import options2 from "./painOptions/painOptions2";
import options3 from "./painOptions/painOptions3";
import options4 from "./painOptions/painOptions4";
import { useLocation, useNavigate } from "react-router-dom";

const Pain1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let answers = location.state?.answers;
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

  return (
    <>
      <QuestionPage1
        options={options1}
        state={nature}
        setState={setNature}
        onContinue={onContinue1}
        question={
          "2. How would you best describe the Nature of the Pain you are experiencing?"
        }
      />
      <QuestionPage1
        options={options2}
        state={nature}
        setState={setSeverity}
        onContinue={onContinue2}
        question={
          "3. How would you best describe the Severity of the Pain you are experiencing?"
        }
      />
      <QuestionPage1
        options={options3}
        state={nature}
        setState={setOnset}
        onContinue={onContinue3}
        question={
          "4. When did you start experiencing pain?"
        }
      />
      <QuestionPage2
        options={options4}
        state={nature}
        setState={setWorse}
        onContinue={onContinue4}
        question={
          "5. Which among the following Worsens the Pain?"
        }
      />
    </>
  );
};

export default Pain1;
