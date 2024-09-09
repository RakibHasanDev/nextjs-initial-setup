"use client"
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
        <h1 className="text-center mt-5 text-2xl font-semibold">Counter value is: <span className="text-red-600">{counter}</span></h1>
      <div className="w-[400px] mx-auto mt-[10vh] flex gap-5">
        <button
          className="p-4 border-2"
          onClick={() => setCounter(counter + 1)}
        >
          Increase
        </button>

        <button
          className="p-4 border-2"
          onClick={() => setCounter(counter - 1)}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
