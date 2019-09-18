import React, { Component } from "react";

import Logo from '../Components/Logo';
import Navbar from '../Components/Navbar';

import Player from '../Components/Player';

class Banner extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (     
        <div id="banner" style={bannerstyle}>
            <Logo/>
            <Navbar switchpage={this.props.switchpage} activePage={this.props.activePage}/>
        </div>
    )
  }
}

const bannerstyle = {
    backgroundColor: "#00b6f0",
    width: "100%",
    color: "white"
}

export default Banner;