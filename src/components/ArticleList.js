import React from 'react';
import List from './List';
import axios from "axios";

class ArticleList extends React.Component {
    state = {
        articles: [],
        ngrams: [],
    };

    componentDidMount() {
        axios.get('https://api.ozae.com/gnw/articles?date=20160601__20180630&key=cb84c941a9894171b2ac4a934c0c0a51&query=trump&hard_limit=100')
            .then(response => {
            this.setState({articles: response.data.articles});
                const tabGram = [];
                response.data.articles.map(article => {
                    axios.get(`https://api.ozae.com/gnw/article/${article.id}/html_content?key=cb84c941a9894171b2ac4a934c0c0a51`)
                        .then(response => {
                            let sumOfAll = article.article_score + article.social_score + article.social_speed_sph;
                            const text = response.data.replace(/(\b(\w{1,3})\b(\s|$))/g,'');
                            const lines = text.split('\n');
                            lines.splice(0,1);
                            const newText = lines.join('\n');
                            axios.post('http://api.cortical.io:80/rest/text/keywords?retina_name=en_associative', {
                                body: newText,
                                }).then(res => {
                                res.data.map(ngram => {
                                    if (ngram !== "body") {
                                        if (ngram.length > 5){
                                            if (tabGram[ngram]){
                                                sumOfAll = sumOfAll + tabGram[ngram];
                                            }
                                            tabGram[ngram] = sumOfAll;
                                        }
                                    }});
                                this.setState({
                                    ngrams: tabGram
                                });
                            });
                        });
                })
        });
    }

    componentDidUpdate() {

    }

    render() {
        return(
            <List data={this.state.articles} />
        );
    }
}

export default ArticleList;
