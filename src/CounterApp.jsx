import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 10 }) => {
  const [counter, setCounter] = useState(value);
  //handle
  const handleAdd = (e) => {
    // console.log(e);
    // setCounter(counter + 1);
    setCounter((c) => c + 1); //si no tenemos la variable
  };
  const handleReset = () => setCounter(value);

  const handleMinus = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button className="button" onClick={handleAdd}>
        +1
      </button>
      <br></br>
      <button className="button" onClick={handleReset}>
        reset
      </button>
      <br></br>
      <button className="button" onClick={handleMinus}>
        -1
      </button>
    </div>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
