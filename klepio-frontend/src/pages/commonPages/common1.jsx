import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Common1 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location?.state.answers;
  console.log(answers);
  return <div>hello this is the common page</div>;
};

export default Common1;
