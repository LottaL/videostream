import React, { Component, useState } from "react";
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import Videomodal from '../Components/Videomodal';

class Streams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: false,
      player2: false,
      player3: false,
      player4: false
    }
    this.openStream = this.openStream.bind(this);
  }

  name = 'playerElement1';

  openStream(target) {
    //toggles videomodal visibility
    let currentState = this.state[target];
    this.setState( {
      player1: false,
      player2: false,
      player3: false,
      player4: false
    } );
    this.setState( {
      [target]: !currentState
    } )
  }

  render() {
    return (
      <div id="streams" className="page">
        <div className="container">
          <div className="row">
            <div className="card col-3" style={cardStyle} onClick={this.props.togglestream}>
              <img src="" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Stream 1</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className="btn btn-primary">Go to Stream</button>
              </div>
            </div>

            <div className="card col-3" style={cardStyle}>
              <img src="" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Stream 2</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className="btn btn-primary">Go to Stream</button>
              </div>
            </div>

            <div className="card col-3" style={cardStyle}>
              <img src="" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Stream 3</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className="btn btn-primary">Go to Stream</button>
              </div>
            </div>

            <div className="card col-3" style={cardStyle}>
              <img src="" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Stream 4</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className="btn btn-primary">Go to Stream</button>
              </div>
            </div>

          </div>
        </div>

      </div>
    )
  }
}


const cardStyle = {
  width: "18rem"
}

export default Streams;