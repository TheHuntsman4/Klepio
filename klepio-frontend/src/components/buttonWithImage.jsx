import React from "react";
import { useState } from "react";

const ButtonWithImage = ({ onClick, title, image, id, isSelected, className }) => {
  const [select, setSelect] = useState(false);

  const onSelect = () => {
    if(onClick){
      onClick(id)
    }
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
      className={`
        w-full flex flex-col items-center p-4 bg-white rounded-3xl sm:p-8
        ${isSelected ? "border-4 border-black" : ""} ${className} 
      `}
    >
      <img src={image} className="w-1/2 h-auto mb-2" alt={title} />
      <p className="text-xl font-semibold sm:text-2xl">{title}</p>
    </button>
  );
};

export default ButtonWithImage;
