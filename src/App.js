import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ArticleList from './components/ArticleList';
import SearchPage from './components/SearchPage';

class App extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <br />
                <SearchPage/>
            </div>
        );

    }
}

export default App;
