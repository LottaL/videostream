import React, { Component } from 'react';
import './App.css';

import Banner from './Pages/Banner';
import Streams from './Pages/Streams';
import Info from './Pages/Info';
import Timetable from './Pages/Timetable';
import Videomodal from './Components/Videomodal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streams: true,
      info: false,
      timetable: false,
      activePage: "streams", //change state if developing another page
      showplayer: false
    }
    this.switchpage = this.switchpage.bind(this);
  }

  togglestream = () => {
    this.setState( {showplayer: !this.state.showplayer} )
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
      <Videomodal 
          togglestream={this.togglestream} 
          componentID='playerElement1'
          showStream={this.state.showplayer}
          player='player1'/>
      {this.state.streams && <Streams togglestream={this.togglestream}/>}
      {this.state.info && <Info/>}
      {this.state.timetable && <Timetable/>}
    </div>
    )
  };
}

export default App;
