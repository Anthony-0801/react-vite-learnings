import React, { useReducer, useState } from "react";
import LevelSevenBComponent from "./LevelSevenBComponent";

export const LevelSeven = () => {
 const [state, dispatch] = useReducer(reducer, 0);
    function reducer(state, action) {
        switch(action.type) {
            case "increment":
                return state + action.payload;
            case "decrement":
                return state - action.payload;
            default:
                return state;
        }
    }

  return (
    <>
    <h1 className="font-bold text-lg font-sans mb-2 border-b-2">
      Level 7: In this level, I'll practice event handling by showing a message
      through a click done in a button. I'll use useReducer to do this.
    </h1>
    <h2 className="font-medium text-md font-sans mb-2">
      {" "}
      When any of the button is clicked, it will show a message and show the
      number of times you clicked the button whether you increment it or not.
    </h2>

    <p className="my-2 font-semibold">Count value is: {state}</p>

    <button
      className="bg-blue-800 w-1/5 p-2 mx-2 rounded-md text-white font-semibold"
      onClick={() => {
        dispatch({type: "increment", payload: 1})
      }}
    >
      Increment
    </button>

    <button
      className="bg-blue-800 w-1/5 p-2 mx-2 rounded-md text-white font-semibold"
      onClick={() => {
        dispatch({type: "decrement", payload: 1})
      }}
    >
      Decrement
    </button>

    <LevelSevenBComponent />
  </>
  )
};

export default LevelSeven;
