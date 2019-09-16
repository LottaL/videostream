import React, { Component } from "react";

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
        pages: ["streams", "info", "timetable"]
    }
  }

  render() {
    return (     
        <div id="navbar" style={navstyle}>
            {this.state.pages.map(e => 
                <div key={e} 
                    style={(this.props.activePage === e) ? navactive : navbuttonstyle} 
                    onClick={() => this.props.switchpage(e)}>
                    {e}
                </div>
                )}
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

const navactive = {
    backgroundColor: "#0099ca",
    margin: "2vh",
    padding: "1vh",
    borderRadius: "2vh"
}

const navstyle = {
    display: "flex",
    flexDirection: "row",
    fontSize: "3vh",
    justifyContent: "center",
}

export default Navbar;