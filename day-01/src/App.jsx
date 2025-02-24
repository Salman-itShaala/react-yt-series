import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold text-blue-500 ">{counter}</h1>
      <button
        className="border-1 border-slate-700 rounded-sm"
        onClick={() => setCounter(counter + 1)}
      >
        Click me
      </button>

      <button
        className="ml-4 border-1 border-slate-700 rounded-sm"
        onClick={() => setCounter(0)}
      >
        Reset
      </button>
    </>
  );
};

export default App;
