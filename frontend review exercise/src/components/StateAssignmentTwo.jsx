import React, { useState } from 'react';

const StateAssignmentTwo = () => {
  const [numbers, setNumbers] = useState([])

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 10)
    setNumbers([...numbers, randomNumber]);
  };

  return (
    <section>
      <button onClick={handleClick}>Click me!</button>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </section>
  )
}


export default StateAssignmentTwo;
