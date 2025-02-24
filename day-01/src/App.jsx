import React, { useState } from "react";

const App = () => {
  const [counter, setCoutner] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold text-blue-500 ">{counter}</h1>
      <button
        className="border-1 border-slate-700 rounded-sm"
        onClick={() => setCoutner(counter + 1)}
      >
        Click me
      </button>
    </>
  );
};

export default App;
