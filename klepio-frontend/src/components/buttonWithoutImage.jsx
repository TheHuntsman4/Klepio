import React from "react";
import { useState } from "react";

const ButtonWithoutImage = ({ onClick, title, id }) => {
  const [select, setSelect] = useState(false);

  const onSelect = () => {
    setSelect(!select);
  };
  return (
    <button
      onClick={() => {
        onSelect();
        if (onClick) {
          onClick();
        }
      }}
      id={id}
      className={`w-full flex flex-col items-center p-4 bg-white rounded-3xl sm:p-8 ${
        select ? "border-4 border-black" : ""
      }`}
    >
      <p className="text-xl py-10 lg:py-24 font-semibold sm:text-2xl">
        {title}
      </p>
    </button>
  );
};

export default ButtonWithoutImage;
