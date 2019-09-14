import React, { Component } from "react";

class Logo extends Component {

  constructor(props) {
    super(props); 
  }

  render() {
    return (     
        <div id="logo" style={logostyle}>
            <img src='/img/espooliikkuu_logo.png' style={{height: "20vh"}}></img>
            <h2>Parhaassa seurassa</h2>
        </div>
    )
  }
}

const logostyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "55%",
    margin: "auto",
    paddingTop: "2vh",
    fontSize: "6vh",
    fontWeight: "bold",
    fontFamily: "'Roboto Mono', monospace"
}

export default Logo;