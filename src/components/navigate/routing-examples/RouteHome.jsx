import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const RouteHome = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="flex justify-center items-center h-screen">
      <div className="mockup-browser border-4 border-black w-6/12 h-3/6">
        <div className="mockup-browser-toolbar">
          <div className="input">anthony-cabulang.com/route-exercise</div>
        </div>

        <div className="grid grid-cols-5 grid-rows-5 h-80 overflow-y-scroll">
          <div className="col-start-2 row-start-5">
            <button
              className="bg-red-800 w-full py-2 rounded-md text-white text-sm font-semibold"
              onClick={() => navigate("/")}
            >
              Go home
            </button>
          </div>
          <div className="col-span-5 row-start-3">
            {" "}
            <h1 className=" text-center text-xl font-bold">Welcome Home! 🏡</h1>
          </div>
          <Outlet />
          <div className="col-start-3 row-start-5">
            <button
              className="bg-green-800 w-full py-2 rounded-md mx-2 text-white text-sm font-semibold"
              onClick={() => navigate("nested-routes")}
            >
              Nested Routes
            </button>
          </div>
          <div className="col-start-4 row-start-5">
          <button
              className="bg-green-800 w-full py-2 rounded-md ml-4 text-white text-sm font-semibold"
              onClick={() => navigate("/mix-routes")}
            >
              Mix Routes
            </button>
          </div>

        </div>
        
      </div>
    </div>

</>
  );
};
