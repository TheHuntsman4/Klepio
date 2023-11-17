import React, { useState } from "react";
import { QuestionPage2 } from "../../components";
import options1 from "./swellingOptions/swellingOptions1";
import { useLocation, useNavigate } from "react-router-dom";
const Swelling1 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let answers = location?.state.answers;
  const [painful, setPainful] = useState("");
  const onContinue1 = () => {
    console.log(painful);
  };
  return (
    <QuestionPage2
      options={options1}
      question={"1. Is/are the swelling painful?"}
      state={painful}
      setState={setPainful}
      onContinue={onContinue1}
    />
  );
};

export default Swelling1;
