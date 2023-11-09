import React, { useState } from 'react';
import './App.css';

function App() {
  const [laskuri, setLaskuri] = useState(100);
      
  const lisaa = () => {
    setLaskuri(laskuri + 1);
  };

  const vahenna = () => {
    setLaskuri(laskuri - 1);
  };

  return (
    <div className="App">
      <h1>Laskuri</h1>
      <p>Laskurin arvo: {laskuri}</p>
      <button onClick={lisaa}>Lisää</button>
      <button onClick={vahenna}>Vähennä</button>
    </div>
  );
}

export default App;
