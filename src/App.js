import React, { Component } from 'react';
import './App.css';

import Banner from './Pages/Banner';
import Streams from './Pages/Streams';
import Info from './Pages/Info';
import Timetable from './Pages/Timetable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streams: true,
      info: false,
      timetable: false,
      activePage: "streams"
    }
    this.switchpage = this.switchpage.bind(this);
  }

  switchpage = (target) => {
    this.setState( {
      streams: false,
      info: false,
      timetable:false
    } );
    this.setState( {
      [target]: true,
      activePage: target
    } )
  }

  render () {
    return (
    <div className="App">
      <Banner switchpage={this.switchpage} activePage={this.state.activePage}/>
      {this.state.streams && <Streams/>}
      {this.state.info && <Info/>}
      {this.state.timetable && <Timetable/>}
    </div>
    )
  };
}

export default App;
