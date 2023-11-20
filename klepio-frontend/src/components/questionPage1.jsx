import React from "react";
import { useMediaQuery } from "react-responsive";
import { ButtonWithImage } from "../components";

const QuestionPage1 = ({ options, question, state, setState, onContinue }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });
  const onSelect = (value) => {
    setState(value);
  };
  const lastOption = options[options.length - 1];
  return (
    <div className="relative h-full w-full">
      <div className={`w-full ${isDesktopOrLaptop ? "h-full" : "h-screen" } flex flex-col justify-center items-center font-poppins text-black`}>
        <p className="text-3xl font-poppins my-12 lg:mt-24 text-center">{question}</p>
        {isDesktopOrLaptop ? (
          <>
            <div className="w-5/6 lg:w-1/2 grid grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 z-20">
              {options.map((option, key) => {
                return (
                  <ButtonWithImage
                    id={key}
                    title={option.title}
                    image={option.image}
                    onClick={() => onSelect(option.code)}
                  />
                );
              })}
            </div>
          </>
        ) : (options.length % 2 === 0) ? (
          <>
            <div className="w-5/6 lg:w-1/2 grid grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 z-20">
              {options.map((option, key) => {
                return (
                  <ButtonWithImage
                    id={key}
                    title={option.title}
                    image={option.image}
                    onClick={() => onSelect(option.code)}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <>
            <div className="w-5/6 lg:w-1/2 grid grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 z-20">
              {options.slice(0, -1).map((option, key) => {
                return (
                  <ButtonWithImage
                    id={key}
                    title={option.title}
                    image={option.image}
                    onClick={() => onSelect(option.code)}
                  />
                );
              })}
            </div>
            <div className="w-1/2 flex justify-center items-center p-4">
              <ButtonWithImage
                id="last"
                title={lastOption.title}
                image={lastOption.image}
                onClick={() => onSelect(lastOption.code)}
              />
            </div>
          </>
        )}
        <button
          className="bg-black my-12 lg:my-12 px-12 py-4 rounded-full text-white"
          onClick={onContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default QuestionPage1;
