import React, { Component } from "react";

class Info extends Component {

  constructor(props) {
    super(props); 
  }

  render() {
    return (     
            <div id="info" className="page" style={infostyle}>
              <img src='/img/flag_banner_cropped.png' style={flagbannerstyle}></img>
              <a href="https://www.espoo.fi/fi-FI/Kulttuuri_ja_liikunta/Liikunta/Euroopan_urheiluviikon_avajaiset_ja_Scho(163667)">
                Tiedot tapahtuman sivulta espoo.fi -sivustolta
              </a>
              <div style={textboxstyle}>
                <h3>School Action Day ja Euroopan urheiluviikon avajaiset 23.9.2019</h3>
                <p>
                  Viidettä kertaa vietettävä Euroopan urheiluviikko (European Week of Sport EWoS) on 
                  Euroopan komission aloite urheilun ja liikunnan edistämiseksi kaikkialla Euroopassa. 
                  Kampanjaviikolla kannustetaan ihmisiä liikkumaan aktiivisesti sekä lisätään 
                  tietoisuutta liikunnan monista hyödyllisistä vaikutuksista. Viikon tunnus on 
                  #BeActive. Tämän vuoden Euroopan urheiluviikko avataan Suomen EU-puheenjohtajuuskaudella 
                  ja avajaiset järjestetään 23.9.2019 Espoossa, School Action Day -tapahtuman yhteydessä. 
                </p>
                <p>
                  <b>Esteettömyys:</b> Avajaiset tapahtuvat urheilupuistossa stadionilla, tapahtumassa huomioidaan 
                  myös pyörätuolia käyttävät ja heille osoitettaan paikka kentältä. Urheilupuiston wc:t ovat 
                  esteettömiä.
                </p>
              </div>
              <div style={textboxstyle}>
                <h4>Lisätietoja</h4>
                <a href="https://www.espoo.fi/fi-FI/Kulttuuri_ja_liikunta/Liikunta/Euroopan_urheiluviikon_avajaiset_ja_Scho(163667)">
                  espoo.fi
                </a>
                <br/>
                <a href="https://espooliikkuu.fi/beactiveespoo">
                  espooliikkuu.fi
                </a>
                <p>Tapahtuman aikataulun ja kartan löydät Aikataulu-välilehdeltä</p>
              </div>
            </div>
    )
  }
}
const flagbannerstyle = {
    objectFit: "cover",
    height: "30vh",
    width: "80%",
    margin: "auto",
    padding: "2vh"
}

const infostyle = {
  padding: "2vh",
  display: "flex",
  flexDirection: "column"
}

const textboxstyle = {
  width: "90%",
  margin: "auto"
}

export default Info;