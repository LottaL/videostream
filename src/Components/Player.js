import React, { Component } from "react";

class Player extends Component {

  constructor(props) {
    super(props); 
  }

  render() {
    return (
      
            <div id={this.props.name} style={{
              position: "absolute",
              width:this.props.width || '100%',
             height:this.props.height || 0, 
             paddingBottom:this.props.paddingBottom || '54.25%',
             paddingLeft:this.props.paddingLeft || 0,
             paddingRight:this.props.paddingRight || 0,
             paddingTop:this.props.paddingTop || 0}}></div>
    )
  }
}

const modalstyle = {
  display: "block",
  width: "80%",
  position: "absolute",
  margin: "auto"
}

export default Player;