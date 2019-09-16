import React, { Component } from "react";

class Timegrid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      program: [],
      programList: []
    }
    this.generateTimetable = this.generateTimetable.bind(this);
  }

  componentDidMount() {
    fetch('/timetable.json')
      .then(res => res.json())
      .then(data => {
        const compare = ( a, b ) => {
          if ( a.startTime < b.startTime ){
            return -1;
          }
          if ( a.startTime > b.startTime ){
            return 1;
          }
          return 0;
        }
        this.setState( {program: data.program.sort(compare)} );
        this.setState( {programList: this.generateTimetable()} );
        }
      )
  }

  generateTimetable = () => {
    let list = [];
    this.state.program.map(e => {
      list.push(<p style={this.isRunning(e.startTime, e.endTime) ? activestyle : cellstyle}>{e.startTime}</p>);
      list.push(<p style={cellstyle}>{e.name}{e.stream ? <b> (s)</b> : ""}</p>);
      list.push(<p style={cellstyle}>{e.location}</p>)
    }
    )
    console.log(list);
    return list;
  }

  isRunning = (startTime, endTime) => {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    if (startTime < time && endTime > time) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (     
      <div id="timegrid" style={timegridstyle}>
        <b><p>Klo</p></b>
        <b><p>Ohjelman nimi</p></b>
        <b><p>Paikka</p></b>
        {this.state.programList.map(e => 
          e
        )}
      </div>
    )
  }
}

const timegridstyle = {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    width: "80%",
    margin: "auto"
}

const cellstyle = {
  border: "solid 1px grey",
  margin: "0"
}

const activestyle = {
  backgroundColor: "#cacaca",
  border: "solid 1px grey",
  margin: "0"
}

export default Timegrid;