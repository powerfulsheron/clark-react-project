import React from 'react';
import { Route, Switch } from "react-router-dom";
import App from '../App';

const About = () => <div>About</div>;

export class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/about" component={About} />
            </Switch>
        );
    }
}
