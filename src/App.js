import React, { useState } from 'react';

function Counter(props) {
  const [count, setCount] = useState({number: 0})
  return (
    <div>
      <h1>Counter {props.number}!</h1>
      <p>{count.number}</p>
      <button onClick={ () => setCount( {number: count.number + 1} ) } >+</button>
      <button onClick={ () => setCount( {number: count.number - 1} ) } >-</button>
    </div>
  )
}

export default function App() {
  const [counterNumber, setCounterNumber] = useState(1)
  const counters = [];
  for (var i = 1; i <= counterNumber; i++) {
    counters.push(<Counter key={i} number={i} />)
  }
  return (
    <div>
      {counters}
      <button onClick={ () => setCounterNumber(counterNumber + 1)}>Add Counter</button>

      <button onClick={ () => setCounterNumber(counterNumber - 1)}>Delete Counter</button>
    </div>

  )
}
