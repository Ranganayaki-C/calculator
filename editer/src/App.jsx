import React, { useState } from 'react';
import './App.css';

function App() {
  const [numbers, setNumbers] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [average, setAverage] = useState(null);

  const handleprime = () => {
   return setNumbers([11,7,5,3])
    };

  const handleEven= () => {
    return setNumbers([22,24,26,28])
  };
  const handlefibonacci = () => {
     return setNumbers([3,6,9,15,24])

  };
  const handlerandom = () => {
    return setNumbers([1,2,3,4,5])
  };
  const handleCalculateAverage  = () => {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / numbers.length;
    setAverage(avg);
  };
  const handleClearNumbers = () => {
    setNumbers([]);
    setAverage(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Average Calculator</h1>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a number"
        />
        <button onClick={handleprime}>p</button>
        <button onClick={handleEven}>e</button>
        <button onClick={handlefibonacci}>f</button>
        <button onClick={handlerandom}>r</button>
        <button onClick={handleCalculateAverage} disabled={numbers.length === 0}>
          Calculate Average
        </button>
        <button onClick={handleClearNumbers} disabled={numbers.length === 0}>
          Clear Numbers
        </button>
        <div>
          <h2>Numbers: {numbers.join(', ')}</h2>
          {average !== null && <h2>Average: {average}</h2>}
        </div>
      </header>
    </div>
  );
}

export default App;
