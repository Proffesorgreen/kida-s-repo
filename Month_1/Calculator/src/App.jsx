import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setInput(input + e.target.name);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculate = () => {
    try {
      setResult(eval(input) || "");
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <div className="calculator">
        <input type="text" value={input} readOnly />
        <input type="text" value={result} readOnly />
        <div className="buttons">
          <button onClick={clearInput} id="clear">
            C
          </button>
          <button name="+" onClick={handleClick}>
            +
          </button>
          <button name="-" onClick={handleClick}>
            -
          </button>
          <button name="*" onClick={handleClick}>
            *
          </button>
          <button name="/" onClick={handleClick}>
            /
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button onClick={calculate} id="result">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
