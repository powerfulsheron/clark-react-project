import React, { Component } from 'react';
import profil from '../img/profil.png';
import deco from '../img/3-layers.png';
import '../App.css';
import '../style/recherche.css';
import axios from 'axios';
import BubbleWrapper from "../wrapper/BubbleWrapper";
import SuperLoader from "./SuperLoader";
import LexControl from "./LexControl";
import Autocomplete from 'react-autocomplete';


class SearchPage extends Component {
    state = {
        articles: [],
        ngrams: [],
        value: '',
        loader: false,
        nbrKw: 10,
        checked: false,
        zoom: 0.8,
        isEmpty: false,
        listKw: [],
    };

    // eslint-disable-next-line
    handleChange = () => this.setState({value: event.target.value});
    // eslint-disable-next-line
    handleChecked = () => this.setState({checked: event.target.checked});
    // eslint-disable-next-line
    handleSlide = () => {this.setState({nbrKw: event.target.value});};

    handleEnter = e => {
        if (e.key === 'Enter') {
            this.findWords(this.state.value);
        }
    };

    componentDidMount(){
        const tabN = [];
        axios.get('https://api.ozae.com/gnw/ngrams?domain=lemonde.fr&date=20160103__20190109&limit=1000&key=11116dbf000000000000960d2228e999')
            .then(res => res.data.ngrams.map(ngram => {
                console.log(this.state.listKw);
                tabN.push({
                    id: ngram.ngram,
                    label: ngram.ngram,
                });
            }));
        this.setState({listKw: tabN});
        console.log(this.state.listKw);
    }

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
                                    if (ngram !== "body"
                                        && ngram !== word
                                        && ngram !== `${word}s`
                                        && ngram !== `${word}e`
                                        && ngram !== "encore"
                                        && ngram !== "depuis"
                                        && ngram !== "contre") {
                                        if (ngram.length > 5) {
                                            const found = tabGram.some(el => {
                                                if(el.ngram === ngram){
                                                    el.articleScore = el.articleScore + article.article_score;
                                                    el.socialScore = el.socialScore + article.social_score;
                                                    return true;
                                                }
                                            });
                                                if(!found){
                                                    tabGram.push({
                                                        ngram: ngram,
                                                        articleScore: article.article_score,
                                                        socialScore: article.social_score,
                                                    });
                                                };

                                        }
                                    }});
                                this.setState({
                                    ngrams: tabGram,
                                    loader: false,
                                });
                            });
                        });
                })
            }).then(() => this.state.articles.length === 0 && this.setState({isEmpty: true}));
    }


    render() {

        return (
            <div className="App">
                <div className="col-left animated animatedFadeInUp fadeInUp">
                    <img src={deco} alt="Clark" className="deco"/>
                    <div className="deconnexion">Deconnexion</div>

                    {/*<Autocomplete
                        inputProps={{ style: {
                                borderTopWidth: '0px',
                                borderBottom: '1px solid #6d7278',
                                borderLeftWidth: '0px',
                                borderRightWidth: '0px',
                                width: '50%',
                                height: '50%',
                                fontSize: '300%',
                                fontWeight: 900,
                                fontFamily: "Lato",
                                color: '#adceef',
                            }
                        }}
                        items={this.state.listKw}
                        shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                        getItemValue={item => item.label}
                        renderItem={(item, highlighted) =>
                            <div
                                key={item.id}
                                style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
                            >
                                {item.label}
                            </div>
                        }
                        value={this.state.value}
                        onChange={this.handleChange}
                        onKeyPress={this.handleEnter}
                        onSelect={value => this.setState({ value })}
                    /> */}
                    <input className="input-live" type="text" value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleEnter} />
                    <div className="Bubble">
                        {this.state.loader && !this.state.isEmpty && <SuperLoader /> }
                        {this.state.isEmpty && <LexControl/>}
                        {this.state.ngrams && <BubbleWrapper
                            data={this.state.ngrams}
                            limit={this.state.nbrKw}
                            setting={this.state.checked}
                            zoom={this.state.zoom}
                            findWords={() => this.findWords()}
                        />}

                    </div>

                </div>
                {this.state.ngrams && <div className="sidebar animated animatedFadeInUp fadeInUp">

                    <div>
                        <img src={profil} alt="Clark" className="header-logo"/>
                    </div>
                    <div className="ngrams-choice">
                        <div id="ngrams" >{this.state.nbrKw}</div>
                        <p className="keys">Keywords</p>
                            <input type="range" className="ngram-number" value={this.state.nbrKw} onChange={this.handleSlide} max="30" min="5"
                                   step="1"/>
                    </div>

                    <div className="strategy">

                        <h1 id="strategy">Stratégie</h1> <p> (SEO par défaut)</p>
                        <hr/>
                        <input onChange={this.handleChecked} type="checkbox" name="choice"/>
                        Réseaux Sociaux
                    </div>
                </div>}


            </div>


        );

    }
}

export default SearchPage;
