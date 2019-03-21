import React from 'react';

class List extends React.Component {

    render() {
        return(
            <ul>
                {this.props.data ? this.props.data.map(article =>
                    <li>
                        {article.article_score}
                    </li>
                ) : null }
            </ul>
        );
    }
}

export default List;
