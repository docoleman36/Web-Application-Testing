import React, { useState } from 'react';

export default function Dashboard() {
  const [strike, setStrike] = useState(0);
  const [ball, setBalle] = useState(0);
  const [foul, setFoul] = useState(0);
  const [hit, setHit] = useState(0);


  // if (setStrike === 1) {
  //   strike + 1
  // }
  return (
    <div>

      <button onClick={() => setStrike(strike + 1)}>Strike</button>
      <p>Strike is {strike}</p>

      <button>Ball</button>
      <button>Foul</button>
      <button>Hit</button>
    </div>
  )
}