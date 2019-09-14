import React, { Component, useState } from "react";
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import Player from '../Components/Player';

import $ from 'jquery';

function Streams() {

    const showPlayer = false;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let name = 'playerElement1';

  function openStream(streamName) {

   /* try {
    //name = await streamName;
    console.log(name);
    if(name){
      handleShow();
    }
    
  } catch(e){
    console.log(e);
  }*/
  }

  
    return (
      <div id="streams" className="page">

        {/* Modal */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Stream</Modal.Title>
          </Modal.Header>
            <Modal.Body>
            Insert stream here
            {/* name ? <Player name="playerElement1"/> : <p>not {name}</p> */}
            <video width="640" height="400" controls="controls" src="http%3A%2F%2F195.148.104.124%3A1935%2Fmobile%2Flottastream%2Fplaylist.m3u8"></video>
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
          </Button>
          </Modal.Footer>
        </Modal>

        {showPlayer ? <Player name="playerElement1"/> : ""}

        <div className="container">
          <div className="row">

            <div className="card col-3" style={cardStyle} onClick={() => openStream('playerElement1')}>
              <img src="" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Stream 1</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className="btn btn-primary">Go to Stream</button>
              </div>
            </div>

            <div className="card col-3" style={cardStyle} onClick={() => openStream('playerElement1')}>
              <img src="" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Stream 2</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className="btn btn-primary">Go to Stream</button>
              </div>
            </div>

            <div className="card col-3" style={cardStyle} onClick={() => openStream('playerElement1')}>
              <img src="" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Stream 3</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className="btn btn-primary">Go to Stream</button>
              </div>
            </div>

            <div className="card col-3" style={cardStyle} onClick={() => openStream('playerElement1')}>
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


const cardStyle = {
  width: "18rem"
}

export default Streams;