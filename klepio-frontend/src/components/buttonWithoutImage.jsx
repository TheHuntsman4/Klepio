import React from "react";

const ButtonWithoutImage = ({onClick, title, id }) => {
  return (
    <button
    onClick={onClick}
      id={id}
      className="w-full flex flex-col items-center p-4 bg-white rounded-3xl sm:p-8"
    >

      <p className="text-xl py-10 lg:py-24 font-semibold sm:text-2xl">{title}</p>
    </button>
  );
};

export default ButtonWithoutImage;
