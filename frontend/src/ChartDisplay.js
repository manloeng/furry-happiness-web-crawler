import React from "react";

const Chart =(props)=> {
  
  
    return (
      <div>
        <p>HTML</p>
        <div className="container">
          <div style= {{width: `${(this.props.number)*100}%`}} className="skills html">{(this.props.number)*100}%</div>
        </div>

        <p>CSS</p>
        <div className="container">
          <div style= {{width: `${(1-this.props.number)*100}%`}} className="skills css">{(1- this.props.number)*100}%</div>
        </div>
      </div>
    );
  
}
//style= {{width: (this.state.number)*1000}}

export default Chart;
