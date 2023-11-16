import React from "react";
import { useMediaQuery } from "react-responsive";

const ButtonWithImage = ({ title, image, id }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });

  return (
    <button
      id={id}
      className="w-full h-full flex flex-col justify-center items-center text-2xl font-poppins font-semibold bg-white rounded-3xl lg:p-12"
    >
      <img src={image} width={isDesktopOrLaptop ? 150 : 75} alt={title} className=""/>
      <p className="mt-12 text-center">{title}</p>
    </button>
  );
};

export default ButtonWithImage;
