import React from "react";
import { useState } from "react";
import { QuestionPage1 } from "../../components";
import options1 from "./painOptions/pain1Options";

const Pain1 = () => {
  const [nature,setNature]=useState("");
  return <QuestionPage1 options={options1} state={nature} setState={setNature} question={"2. How would you best describe the Nature of the Pain you are experiencing?"}/>;
};

export default Pain1;
