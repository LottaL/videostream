import React, { Component } from "react";
import Streams from "../Pages/Streams";

class Navbtn extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (     
        <div id="navbtn" style={navbuttonstyle}>
            
        </div>
    )
  }
}

const navbuttonstyle = {
    backgroundColor: "#00b6f0",
    margin: "2vh",
    padding: "1vh",
    borderRadius: "2vh"
}

const navhover = {
    backgroundColor: "#0099ca",
    margin: "2vh",
    padding: "1vh",
    borderRadius: "2vh"
}

export default Navbtn;