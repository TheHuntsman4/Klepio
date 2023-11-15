import React from "react";
import results from './resultArray';


const ResultDecoder = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {results.map((result, key) => (
        <div key={key} className="bg-white text-black">
          <h1 className="font-bold text-3xl font-pontiac">{result.title}</h1>
          <p className="font-poppins text-xl">{result.description}</p>
          <img src={result.image} alt="image" />
        </div>
      ))}
    </div>
  );
};

export default ResultDecoder;
