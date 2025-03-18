import React from "react";
import { useNavigate } from "react-router-dom";

export const LevelEight = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="font-bold text-lg font-sans mb-2 border-b-2">
        Level 7: In this level, I'll just simply do some routing that can be
        done in React using React Router.
      </h1>
      <h2 className="font-medium text-md font-sans mb-2">
        {" "}
        When you clicked this button it will redirect you to the routing homepage.
      </h2>
      <button
      className="bg-blue-800 w-full p-2 mx-2 rounded-md text-white font-semibold"
      onClick={() => 
        navigate('/route-exercise')
      }
    >
      Go to Routing Exercise
    </button>
    </div>
  );
};
