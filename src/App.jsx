import React, { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

const App = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(false);
  const passwordRef = useRef(null);
  const copyPassword = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  const passwordGenerator = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = "";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*_+-=*/`";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    console.log(pass);

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(passwordGenerator, [length, numberAllowed, charAllowed]);
  return (
    <>
      <div className="max-w-md border-2 mt-8 text-center m-auto flex flex-col text-yellow-400 rounded-2xl justify-evenly items-center  p-4 bg-gray-800">
        <h1 className="text-3xl font-bold  text-white">Password Generator</h1>
        <br />
        <div>
          <input
            type="text"
            readOnly
            value={password}
            placeholder="Password"
            ref={passwordRef}
            className="bg-white max-w-full p-2.5 text-indigo-700"
          />
          <button
            onClick={copyPassword}
            className="bg-indigo-600 text-white p-2.5"
          >
            Copy
          </button>
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
            <h2>Length: {length}</h2>
          </div>
          <div>
            <label>Numbers </label>
            <input
              className="accent-yellow-300 "
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <br />
            <label>Character   </label>
            <input
              className="accent-yellow-300 "
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
