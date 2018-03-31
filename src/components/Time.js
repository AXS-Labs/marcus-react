import React from 'react';

function Time({ time, click }) {
  const stringifiedTime = time && time.toString();

  return (
    <div>
      { stringifiedTime }
      <a href="#" onClick={ click }>
        BUTTON ALTER
      </a>
    </div>
  );
}

export default Time;
