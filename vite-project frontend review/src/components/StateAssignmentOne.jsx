import React, { useState } from 'react';

const StateAssignmentOne = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <section>
      <button onClick={handleClick}>{clickCount}</button>
    </section>
  );
};

export default StateAssignmentOne;
