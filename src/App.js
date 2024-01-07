import { useState } from 'react';
import './App.css';

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("Counter cannot go below 0");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Counter</h1>
      <h2 className="counterValue">Counter Value: {counter}</h2>

      <button className="addButton" onClick={addValue}>
        Add Value
      </button>
      <br />
      <button className="removeButton" onClick={removeValue}>
        Remove Value
      </button>
    </div>
  );
}

export default App;
