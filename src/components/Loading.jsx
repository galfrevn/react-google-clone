import React from "react";
import Loader from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Loader type="Grid" color="#3b82f6" height={55} width={80} />
    </div>
  );
};
