import { useState } from "react";
import "./App.css";
import React from "react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-red-600 pl-5 mb-100">Vite + React</h1>

      <div className="kkkk">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="bg-red-500">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
