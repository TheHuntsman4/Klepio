import React from "react";
import { useMediaQuery } from "react-responsive";

const ButtonWithImage = ({ title, image, id }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  return (
    <button
      id={id}
      className="w-full flex flex-col items-center p-4 bg-white rounded-3xl sm:p-8"
    >
      <img src={image} className="w-1/2 h-auto mb-2" alt={title} />

      <p className="text-xl font-semibold sm:text-2xl">{title}</p>
    </button>
  );
};

export default ButtonWithImage;
