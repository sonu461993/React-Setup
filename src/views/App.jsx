import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from "./DashBoard/Dashboard.jsx";
import Login from "./Login.jsx";

export default class App extends Component
{
    constructor()
    {
        super();
    }

    render()
    {
        return(
            <div>
                <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/dashboard" component={Dashboard} />
                </Switch>
                </BrowserRouter>
            </div>
        )
    }
}