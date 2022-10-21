import React from "react";
import { ProgressBar } from "react-loader-spinner";

function Spinner({ message }) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#426aed"
        barColor="#0b3880"
      />

      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
}

export default Spinner;
