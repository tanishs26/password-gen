import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [password, setPassword] = useState(null);
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(false);

  return (
    <>
      <div className="max-w-md border-2 mt-8 text-center m-auto flex flex-col text-orange-400 rounded-2xl justify-evenly items-center  p-4 bg-gray-800">
        <h1 className="text-3xl font-bold  text-white">Password Generator</h1>
        <br />
        <div>
          <input
            type="text"
            readOnly
            value={password}
            placeholder="Password"
            className="bg-white max-w-full p-2.5 "
          />
          <button className="bg-indigo-600 text-white p-2.5">Copy</button>
        </div>
        <div className="flex gap-30 m-4">
          <div>
            <input
              onChange={(e) => {
                setLength(e.target.value);
              }}
              type="range"
              max={20}
              min={6}
              className="max-w-max cursor-pointer"
            />
            <h2>Length:{length}</h2>
          </div>
          <div>
            <label>Numbers</label>
            <input type="checkbox" defaultChecked={numberAllowed} />
            <br />
            <label>Character</label>
            <input type="checkbox" defaultChecked={charAllowed} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
