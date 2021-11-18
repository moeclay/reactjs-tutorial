import React, { Component } from 'react';
import moment from 'moment';
const dateTime = new Date();

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <div>
        <h1>Contoh Formatting Tanggal & Waktu</h1>
        <p>Contoh 1 : {moment(dateTime).format('ll')}</p>
        <p>Contoh 2 : {moment(dateTime).format('lll')}</p>
        <p>Contoh 3 : {moment(dateTime).format('llll')}</p>
        <p>Contoh 4 : {moment(dateTime).format('YY/mm/dd')}</p>
        <p>Contoh 5 : {moment(dateTime).format('YYYY-MM-D')}</p>
        <p>Contoh 6 : {moment(dateTime).format('YY:MM:DD:H:S')}</p>
        <p>Contoh 7 : {moment(dateTime).format('gggg')}</p>
        <p>Contoh 8 : {moment(dateTime).format('l')}</p>
        <p>Contoh 8 : {moment().unix()}</p>
      </div>
    );
  }
}