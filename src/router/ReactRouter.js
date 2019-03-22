import React from 'react';
import { Route, Switch } from "react-router-dom";
import App from '../App';
import Register from '../components/Form/Register';
import Login from '../components/Form/Login';
import Search from '../components/SearchPage';

export class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route path="/search" component={Search} />
            </Switch>
        );
    }
}
