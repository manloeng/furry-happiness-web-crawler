import React from 'react';

const Chart = ({ number }) => {
  return (
    <div>
      <p>HTML</p>
      <div className="container">
        <div style={{ width: `${number * 100}%` }} className="skills html">
          {number * 100}%
        </div>
      </div>

      <p>CSS</p>
      <div className="container">
        <div style={{ width: `${(1 - number) * 100}%` }} className="skills css">
          {(1 - number) * 100}%
        </div>
      </div>
    </div>
  );
};
//style= {{width: (this.state.number)*1000}}

export default Chart;
