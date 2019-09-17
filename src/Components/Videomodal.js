import React, { Component } from "react";

import Player from './Player';

class Videomodal extends Component {

  constructor(props) {
    super(props); 
  }

  render() {
    return (     
            <div id="videomodal" style={this.props.showStream ? {} : {display: "none"}}>
              <div id="closebuttonheader" style={{textAlign: "right"}}>
                <button onClick={() => this.props.closeStream(this.props.player)}>x</button>
              </div>
              <div id={this.props.componentID} style={playerstyle}></div>
            </div>
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

export default Videomodal;