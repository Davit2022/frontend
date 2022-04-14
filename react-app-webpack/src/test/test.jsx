import React from 'react';
import { useSelector } from 'react-redux';

function Test() {
  const age=50
  const name = useSelector((state) => state.user.name);
  return (
    <div className="test">
      <h1>{name}</h1>
    </div>
  );
}

export default Test;