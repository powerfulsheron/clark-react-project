import React from 'react';
import { Route, Switch } from "react-router-dom";
import App from '../App';
import Register from '../components/Form/Register';
import Login from '../components/Form/Login';
const About = () => <div>About</div>;
export class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route path="/about" component={About} />
                <Route path="/search" component={Search} />
            </Switch>
        );
    }
}
