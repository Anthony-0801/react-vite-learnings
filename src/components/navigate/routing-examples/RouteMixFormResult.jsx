import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const RouteMixFormResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name } = location.state;

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="mockup-browser border-4 border-black w-6/12 h-3/6">
          <div className="mockup-browser-toolbar">
            <div className="input">
              anthony-cabulang.com/route-exercise/useLocation
            </div>
          </div>

          <div className="flex flex-col justify-center items-center h-80">
            <h1 className=" text-center text-xl font-bold">
              Welcome {name}! 😉
            </h1>

            <button
              className="bg-red-800 p-4 mt-10 py-2 rounded-md text-white text-sm font-semibold"
              onClick={() => navigate("/")}
            >
              Go home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
