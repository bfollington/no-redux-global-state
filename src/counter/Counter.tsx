import React from "react";
import { useCounter } from "./counterState";

const Counter = () => {
  const { state, increment, decrement } = useCounter();

  return (
    <div>
      <label>Count is: {state.count}</label>
      <button type="button" onClick={increment}>
        ++
      </button>
      <button type="button" onClick={decrement}>
        --
      </button>
    </div>
  );
};

export default Counter;
