import React, { Component } from "react";

class Player extends Component {

  constructor(props) {
    super(props); 
  }

  render() {
    return (
      <div id={this.props.name} style={playerstyle}></div>
    )
  }
}

const playerstyle = {
  width:'100%',
  height: 0, 
  paddingBottom: '54.25%',
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: 0,
  zIndex: "2"
}

const modalstyle = {
  display: "block",
  width: "80%",
  position: "absolute",
  margin: "auto"
}

export default Player;