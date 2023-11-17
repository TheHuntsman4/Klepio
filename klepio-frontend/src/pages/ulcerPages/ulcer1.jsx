import React from "react";
import { useState } from "react";
import { QuestionPage2 } from "../../components";
import options1 from "./ulcerOptions/ulcerOptions1";
import { useLocation, useNavigate } from "react-router-dom";

const Ulcer1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let answers = location.state?.answers;
  const [painful, setPainful] = useState("");
  const onContinue1 = () => {
    answers = { ...answers, "Is the ulcer painful": painful };
    console.log(answers);
  };

  return (
    <QuestionPage2
      options={options1}
      state={painful}
      setState={setPainful}
      onContinue={onContinue1}
      question={"1. Is the ulcer painful?"}
    />
  );
};

export default Ulcer1;
