import React from "react";

const OutputSkeleton = () => {
  return (
    <div className="space-y-3 p-4 w-full">
      <div className="h-4 w-3/4 rounded-md bg-gray-500 animate-pulse"></div>
      <div className="h-4 w-1/2 rounded-md bg-gray-500 animate-pulse"></div>
      <div className="h-4 w-5/6 rounded-md bg-gray-500 animate-pulse"></div>
      <div className="h-4 w-2/5 rounded-md bg-gray-500 animate-pulse"></div>
      <div className="h-4 w-3/4 rounded-md bg-gray-500 animate-pulse"></div>
      <div className="h-4 w-1/2 rounded-md bg-gray-500 animate-pulse"></div>
      <div className="h-4 w-5/6 rounded-md bg-gray-500 animate-pulse"></div>
      <div className="h-4 w-2/5 rounded-md bg-gray-500 animate-pulse"></div>
    </div>
  );
};

export default OutputSkeleton;