import React from "react";
import { useState } from "react";
import { QuestionPage1 } from "../../components";
import options1 from "./painOptions/pain1Options";
import { useLocation, useNavigate } from "react-router-dom";

const Pain1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let answers = location.state?.answers;
  const [nature, setNature] = useState("");
  const onContinue1 = () => {
    answers = { ...answers, "Nature of Pain": nature };
    console.log(answers);
  };

  return (
    <QuestionPage1
      options={options1}
      state={nature}
      setState={setNature}
      onContinue={onContinue1}
      question={
        "2. How would you best describe the Nature of the Pain you are experiencing?"
      }
    />
  );
};

export default Pain1;
