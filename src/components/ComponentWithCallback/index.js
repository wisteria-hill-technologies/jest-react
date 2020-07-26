import React from 'react';

const ComponentWithCallback = ({ callback }) => {
  return (
    <div>
      <h2>Component With Callback</h2>
      <button
        data-test="button"
        onClick={() => callback('Callback Called')}
      >
        Call Callback
      </button>
    </div>
  );
};

export default ComponentWithCallback;

