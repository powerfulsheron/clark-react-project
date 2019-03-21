import React from 'react';
import { Route, Switch } from "react-router-dom";
import App from '../App';
import Search from '../components/SearchPage';

export class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/search" component={Search} />
            </Switch>
        );
    }
}
