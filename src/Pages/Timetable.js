import React, { Component } from "react";

import Timegrid from '../Components/Timegrid';

class Timetable extends Component {

  constructor(props) {
    super(props); 
  }

  render() {
    return (     
            <div id="timetable" className="page" style={infostyle}>
              <h3>Tapahtuman aikataulu</h3>
              <p>
                Aikataulu näyttää kulloinkin aikataulun mukaan käynnissä olevan ohjelman, sekä 
                tiedon streamataanko ohjelma.
              </p>
              <Timegrid/>
            </div>
    )
  }
}

const infostyle = {
  padding: "2vh",
  display: "flex",
  flexDirection: "column"
}

export default Timetable;