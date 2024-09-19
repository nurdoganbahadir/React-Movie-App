import React from "react";

const Loading = () => {
  return [0, 1, 2, 3].map((_, i) => (
    <div key={i}>
      <div className="flex items-center justify-center h-[510px] w-[300px] m-4 animate-pulse bg-gray-300 rounded "></div>
    </div>
  ));
};

export default Loading;
