import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import getArticles from './action/articles';
import ArticleList from './components/ArticleList';
class App extends Component {


  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <ul>
          </ul>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ArticleList/>
            <button onClick={ () => getArticles(`https://api.ozae.com/gnw/articles?date=20160601__20180630&key=11116dbf000000000000960d2228e999&edition=en-us-ny&query=trump&hard_limit=20`) } type="button"> wesh </button>
        </header>
      </div>
    );
  }
}

export default App;
