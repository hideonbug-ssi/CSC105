import React, { useState } from 'react';

const TypeMe = () => {
  const [isFocused, setIsFocused] = useState(true);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const warningTextStyle = {
    color: 'red',
    marginTop: '5px',
  };

  return (
    <div>
      <input
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder=" "
      />
      {!isFocused && (
        <p style={warningTextStyle}>Please type in here!</p>
      )}
    </div>
  );
};

export default TypeMe;
