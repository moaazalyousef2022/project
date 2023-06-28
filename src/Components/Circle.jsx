import React from 'react';

function Circle({ name, ratio }) {
  return (
    <>
      <div style={{ marginTop: '1rem' }} className="skill">
        <div className="outer">
          <div className="inner">
            <div id="number">{ratio}%</div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stop-color="#e91e63" />
              <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
          </defs>
          <circle style={{ strokeDasharray: 'ratio' }} cx="80" cy="80" r="70" stroke-linecap="round" />
        </svg>
        <p className="para-skill" style={{ color: 'azure', marginTop: '1rem' }}>
          {name}
        </p>
      </div>
    </>
  );
}

export default Circle;
