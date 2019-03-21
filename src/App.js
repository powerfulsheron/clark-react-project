import React, { Component } from 'react';
import logo from './logo.svg';
import clark from './img/Logo.svg';
import profil from './img/profil.png';
import deco from './img/3-layers.png';
import './App.css';
import './style/recherche.css';
import axios from 'axios';
import BubbleChart from '@weknow/react-bubble-chart-d3';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


const data = [
    { label: 'CRM', value: 1,  color: '#ff00ff' },
    { label: 'API', value: 1 },
    { label: 'Data', value: 1 },
    { label: 'Commerce', value: 1 },
    { label: 'AI', value: 3 },
    { label: 'Management', value: 5 },
    { label: 'Testing', value: 6 },
    { label: 'Mobile', value: 9 },
    { label: 'Conversion', value: 9 },
    { label: 'Misc', value: 21 },
    { label: 'Databases', value: 22 },
    { label: 'DevOps', value: 22 },
    { label: 'Javascript', value: 23 },


];

class App extends Component {
    state = {
        ngrams: [],
        valuengrams: 15,
    }
  getArticles = url => {
    axios.get(url).then(response => console.log(response)/* this.setState({ngrams: this.processArticlesToNgrams(articles)})*/);
    };
    bubbleClick = (label) =>{
        console.log("Custom bubble click func")
    }
    // ngramNumber = (valuengrams) => {
    //     this.setState({
    //         value: valuengrams,
    //     });
    //     console.log(valuengrams);
    // }
    // handlechange = (event) => {
    //     this.setState({
    //         query: event.target.value
    //     });
    // }
  componentDidMount() {
    this.getArticles('https://api.ozae.com/gnw/articles?date=20160601__20180630&key=11116dbf000000000000960d2228e999&query=PSG&hard_limit=20');
    this.setState({ ngrams: data});
    //this.setState({valuengrams: 15});
  }

  componentDidUpdate() {

        // fetch('url?query='+this.state.query,{
        //     method: "GET",
        //     headers: {
        //         "Content-type": "application/json"
        //     },
        //     body: {
        //         "param1" : "value1"
        //     }
        //
        // })
        //     .then((response) =>response.json())
        //     .then(data => this.setState({articles: data.articles}}}))

  }


    render() {

    return (
        <div className="App">
            {/*<header className="App-header">*/}
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                {/*<h1 className="App-title">Welcome to React</h1>*/}
            {/*</header>*/}
            {/*<br />*/}
            {/*<div>*/}
                {/*{this.state.ngrams.map((ngram) => <p>{ngram.label}</p>)}*/}
            {/*</div>*/}
            <div className="col-left">
                <img src={deco} alt="Clark" className="deco"/>
                <div className="deconnexion">Deconnexion</div>
                <>
                <input className="input-live"type="text" onChange={this.handlechange} />
            </>
                <div className="Bubble">
                    <BubbleChart
                        graph= {{
                            zoom: 0.7,
                            offsetX: -0.04,
                            offsetY: -0.01,
                        }}
                        width={window.innerWidth=800}
                        height={window.innerHeight=800}
                        fontFamily="Lato"
                        showLegend={false}
                        data={this.state.ngrams}
                        labelFont={{
                            family: 'Lato',
                            size: 16,
                            color: '#fff',
                            weight: 'bold',
                        }}

                    />
            </div>

            </div>
            <div className="sidebar">

                <div>
                    <img src={profil} alt="Clark" className="header-logo"/>
                    {/*<p className="compte">Mon compte</p>*/}
                </div>
                <div className="ngrams-choice">
                <div id="ngrams">15</div>
                    <p className="keys">Keywords</p>
                <>
                    <input type="range" className="ngram-number" onChange={this.ngramNumber} max="30" min="15"
                           step="1"/>
                </>
            </div>

                <div className="strategy">

                    <h1 id="strategy">Strategy</h1>
                    <hr/>
                    <ul>
                        <li><label className="container">
                            <input type="radio" name="choice" checked="checked"/>
                            Social Media
                        </label>
                        </li>
                        <li>
                            <label className="container">
                                <input type="radio" name="choice"/>
                                Buzz
                            </label>
                        </li>
                        <li>
                            <label className="container">
                                <input type="radio" name="choice"/>
                                SEO
                            </label>
                        </li>
                    </ul>
                    <div className="parameters">
                        <p>Advenced parameters…</p>
                        <hr/>
                        <>
                            <ul>
                                <li>
                                    <label>Engagement
                                        <input type="range" className="range1 engagement"  max="5" min="1"
                                               step="1"/>
                                    </label>
                                </li>
                                <li>
                                    <label>Progation
                                        <input type="range" className="range2"  max="5" min="1"
                                               step="1"/>
                                    </label>
                                </li>
                                <li>
                                    <label>Densité
                                        <input type="range" className="range3"  max="5" min="1"
                                               step="1"/>
                                    </label>
                                </li>
                                <li>
                                    <label>Fiabilité
                                        <input type="range" className="range4"  max="5" min="1"
                                               step="1"/>
                                    </label>
                                </li>
                                <li>
                                    <label>Position
                                        <input type="range" className="range5"  max="5" min="1"
                                               step="1"/>
                                    </label>
                                </li>
                            </ul>
                        </>
                    </div>
                </div>
            </div>


            </div>


    );

  }
}

export default App;
