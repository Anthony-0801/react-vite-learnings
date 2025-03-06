import React, { useReducer, useState } from "react";

export const LevelSevenBComponent = () => {
  const [bankAmount, setBankAmount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { balance: 0 });
  function reducer(state, action) {
    switch (action.type) {
      case "deposit":
        return { ...state, balance: state.balance + action.payload };
      case "withdraw":
        return { ...state, balance: state.balance - action.payload };
    }
  }

  return (
    <>
      <h2 className="font-medium text-md font-sans my-2 border-t-2">
        {" "}
        In this second challenge, I'll create a simple amount counter just like
        in a bank.
      </h2>

      <p className="my-2 font-semibold">Your bank amount: {state.balance}</p>
      <input
        value={bankAmount}
        onChange={(e) => setBankAmount(e.target.value)}
        className="border border-4 p-1"
      />

      <button
        className="bg-blue-800 w-1/5 p-2 mx-2 rounded-md text-white font-semibold"
        onClick={() => {
          dispatch({ type: "deposit", payload: Number(bankAmount) });
        }}
      >
        Deposit
      </button>

      <button
        className="bg-blue-800 w-1/5 p-2 mx-2 rounded-md text-white font-semibold"
        onClick={() => {
          dispatch({ type: "withdraw", payload: Number(bankAmount) });
        }}
      >
        Withdraw
      </button>
    </>
  );
};

export default LevelSevenBComponent;
