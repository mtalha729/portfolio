import React from "react";

export default function Model() {
  return (
    <div className="w-full h-screen flex flex-col">
      {/* Header */}
      <div className="w-full fixed top-0 h-[100px] border-b flex justify-between items-center px-10 bg-white z-50">
        <h1 className="text-2xl text-gray-900"></h1>
        <button className="p-3 bg-blue-700 text-white text-lg font-semibold">
          Live Demo
        </button>
      </div>

      {/* Main Content */}
      <div className="w-full flex-1 mt-[100px]">
        {/* mt-[100px] to offset fixed header height */}
        <div className="w-full h-full bg-gray-200 p-10 flex flex-col justify-center items-center">
          <h3 className="text-3xl text-gray-800 font-bold">No Images Available</h3>
          <h4>This project doesn't have any images yet.</h4>
        </div>
      </div>
    </div>
  );
}
