import React from 'react';

class List extends React.Component {

    render() {
        return(
            <ul>
            {this.props.data ? Object.keys(this.props.data).map((key) =>
                    <li>
                        {key} : {this.props.data[key]}
                    </li>
            ) : null }
            </ul>);
        }

    }

export default List;
