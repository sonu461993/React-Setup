import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AccountInfo from "./AccountInfo.jsx";
import AccountStatement from "./AccountStatement.jsx";
import ProfitLoss from "./ProfitLoss.jsx";
import Sidebar from "./Sidebar.jsx";

export default class Container extends Component
{
    constructor()
    {
        super();
    }

    render()
    {
        return(
            <div className="mainContent_container">
                <Sidebar />

                <div>
                <BrowserRouter>
                <Switch>
                    <Route exact path="/dashboard/accountInfo">
                        <AccountInfo />
                    </Route>

                    <Route exact path="/dashboard/accountStatement"> 
                        <AccountStatement />
                    </Route>

                    <Route exact path="/dashboard/profitloss" >
                        <ProfitLoss />
                        </Route>
                </Switch>
                </BrowserRouter>
                </div>
            </div>
        )
    }
}