import React from "react";

const ButtonWithImage = ({onClick, title, image, id }) => {
  return (
    <button
    onClick={onClick}
      id={id}
      className="w-full flex flex-col items-center p-4 bg-white rounded-3xl sm:p-8"
    >
      <img src={image} className="w-1/2 h-auto mb-2" alt={title} />

      <p className="text-xl font-semibold sm:text-2xl">{title}</p>
    </button>
  );
};

export default ButtonWithImage;
