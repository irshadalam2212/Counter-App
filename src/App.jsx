import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCount] = useState(0);
  // let counter = 15
  const addValue = () => {
    // counter = counter + 1
    if (counter <= 20) {
      setCount(counter + 1);
    }
  };
  const removeValue = () => {
    if (counter >= 0) {
      setCount(counter - 1);
    }
  };
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue} disabled={counter >= 20}>
        Add Value
      </button>
      <br />
      <button onClick={removeValue} disabled={counter <= 0}>
        Remove Value
      </button>
    </>
  );
}

export default App;
