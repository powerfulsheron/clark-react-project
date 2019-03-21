import React, { Component } from 'react';
import logo from '../logo.svg';
import clark from '../img/Logo.svg';
import profil from '../img/profil.png';
import deco from '../img/3-layers.png';
import '../App.css';
import '../style/recherche.css';
import axios from 'axios';
import Loader from "react-loader-spinner";
import BubbleWrapper from "../wrapper/BubbleWrapper";


class SearchPage extends Component {
    state = {
        articles: [],
        ngrams: [],
        value: '',
        loader: false,
        nbrKw: 10,

    };

    getArticles = url => {
        axios.get(url).then(response => console.log(response)/* this.setState({ngrams: this.processArticlesToNgrams(articles)})*/);
    };
    bubbleClick = (label) =>{
        console.log("Custom bubble click func")
    }
    // eslint-disable-next-line
    handleChange = () => this.setState({value: event.target.value});
    // eslint-disable-next-line
    handleSlide = () => this.setState({nbrKw: event.target.value});
    handleEnter = e => {
        if (e.key === 'Enter') {
            this.findWords(this.state.value);
        }
    };

    findWords(word) {
        this.setState({loader: true});
        axios.get(`https://api.ozae.com/gnw/articles?date=20160601__20180630&key=cb84c941a9894171b2ac4a934c0c0a51&query=${word}&hard_limit=1000`)
            .then(response => {
                this.setState({articles: response.data.articles});
                const tabGram = [];
                response.data.articles.map(article => {
                    axios.get(`https://api.ozae.com/gnw/article/${article.id}/html_content?key=cb84c941a9894171b2ac4a934c0c0a51`)
                        .then(response => {
                            const text = response.data.replace(/(\b(\w{1,3})\b(\s|$))/g,'');
                            const lines = text.split('\n');
                            lines.splice(0,1);
                            const newText = lines.join('\n');
                            axios.post('http://api.cortical.io:80/rest/text/keywords?retina_name=en_associative', {
                                body: newText,
                            }).then(res => {
                                res.data.map(ngram => {
                                    let sumOfAll = article.article_score + article.social_score + article.social_speed_sph;
                                    if (ngram !== "body"
                                        && ngram !== word
                                        && ngram !== `${word}s`
                                        && ngram !== `${word}e`
                                        && ngram !== "encore"
                                        && ngram !== "depuis"
                                        && ngram !== "contre") {
                                        if (ngram.length > 5) {
                                            if (tabGram[ngram]) {
                                                sumOfAll = sumOfAll + tabGram[ngram];
                                            }
                                            tabGram[ngram] = sumOfAll;
                                        }
                                    }});
                                this.setState({
                                    ngrams: tabGram,
                                    loader: false,
                                });
                            });
                        });
                })
            });
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

    componentDidUpdate() {

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
                        <input className="input-live" type="text" value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleEnter} />
                    </>
                    <div className="Bubble">
                        {this.state.loader && <Loader
                            type="Watch"
                            color="#00BFFF"
                            height="100"
                            width="100"
                        />}

                        {this.state.ngrams && <BubbleWrapper
                            graph= {{
                                zoom: 0.6,
                                offsetX: -0.03,
                                offsetY: -0.01,
                            }}
                            width={window.innerWidth=850}
                            height={window.innerHeight=850}
                            fontFamily="Lato"
                            showLegend={false}
                            data={this.state.ngrams}
                            labelFont={{
                                family: 'Lato',
                                size: 16,
                                color: '#fff',
                                weight: 'bold',
                            }}
                            data={this.state.ngrams} limit={this.state.nbrKw}/>}

                    </div>

                </div>
                <div className="sidebar">

                    <div>
                        <img src={profil} alt="Clark" className="header-logo"/>
                        {/*<p className="compte">Mon compte</p>*/}
                    </div>
                    <div className="ngrams-choice">
                        <div id="ngrams" >{this.state.nbrKw}</div>
                        <p className="keys">Keywords</p>
                        <>
                            <input type="range" className="ngram-number" value={this.state.nbrKw} onChange={this.handleSlide} max="25" min="10"
                                   step="1"/>
                        </>
                    </div>

                    <div className="strategy">

                        <h1 id="strategy">Strategie</h1>
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

export default SearchPage;
