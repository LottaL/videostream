import React, { Component } from "react";

class Timegrid extends Component {

  constructor(props) {
    super(props); 
  }

  render() {
    return (     
            <div id="timegrid" style={timetablestyle}></div>
    )
  }
}

const timetablestyle = {
    display: "grid"
}

export default Timegrid;