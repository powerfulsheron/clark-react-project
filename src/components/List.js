import React from 'react';

class List extends React.Component {

    render() {
        return(
            <ul>
                {Object.keys(this.props.data).map((key) =>
                    <li>
                        {key} : {this.props.data[key]}
                    </li>
            )}
            </ul>);
        }

    }

export default List;
