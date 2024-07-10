import React, { useState } from 'react';

const UserInput = ({ setUsername, setCurrentView }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(input);
    setCurrentView('repos');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default UserInput;
