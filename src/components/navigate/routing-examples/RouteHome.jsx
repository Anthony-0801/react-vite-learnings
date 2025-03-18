import React from "react";
import { useNavigate } from "react-router-dom";

export const RouteHome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="mockup-browser border-4 border-black w-6/12 h-3/6">
        <div className="mockup-browser-toolbar ">
          <div className="input">anthony-cabulang.com/route-exercise</div>
        </div>
        <div className="grid place-content-center h-80">
          <h1 className=" text-center text-xl font-bold">Welcome Home! 🏡</h1>
          <button
            className="bg-blue-800 w-full py-2 mx-2 rounded-md text-white text-sm font-semibold"
            onClick={() => navigate("/")}
          >
            Homepage
          </button>
        </div>
      </div>
    </div>
  );
};
