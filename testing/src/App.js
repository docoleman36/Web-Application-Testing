import React, { useState } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Display from './Components/Display';

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [fouls, setFouls] = useState(0);
  const [hits, setHits] = useState(0);

  return (
    <div className="App">
      <Display
        balls={balls}
        strikes={strikes}
      />
      <Dashboard
        balls={balls}
        strikes={strikes}
        fouls={fouls}
        hits={hits}
        setBalls={setBalls}
        setStrikes={setStrikes}
        setFouls={setFouls}
        setHits={setHits}
      />
    </div>
  );
}

export default App;