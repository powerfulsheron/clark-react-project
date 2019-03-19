import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  getArticles = url => {
    axios.get(url).then(response => console.log(response));
    };

  componentDidMount() {
    this.getArticles('https://api.ozae.com/gnw/articles?date=20190317__20190317&edition=fr-fr&key=11116dbf000000000000960d2228e999&hard_limit=50&topic=s');
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
