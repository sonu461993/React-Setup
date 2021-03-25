import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
    constructor() {
        super();

        this.state = {
            reportDropDownVisible: false
        }
    }


    hideReportOptions() {
        this.setState({ reportDropDownVisible: false });
    }

    showComponent(path)
    {
        this.props.history.push(path);
    }

    render() {
        return (
            <div className="navbar">
                <ul>
                    <li><a href="#"> <i className="fas fa-home"></i>Dashboard</a></li>
                    <li><a href="#">In-Play</a></li>
                    <li><a href="#">Favorite</a></li>
                    <li><a href="#">Running Market Analysis</a></li>
                    <li className="menu_report"><a href="#">Report</a>

                       
                            <ul className="report_dropdown">
                                <li><a href="#" onClick={this.showComponent.bind(this, "/dashboard/accountInfo")}>Account Info</a></li>
                                <li><a href="#" onClick={this.showComponent.bind(this, "/dashboard/accountStatement")}>Account Statement</a></li>
                                <li><a href="#" onClick={this.showComponent.bind(this, "/dashboard/profitloss")}>Profit & Loss</a></li>
                                <li><a href="#" onClick={this.showComponent.bind(this, "/dashboard/accountStatement")}>Bet History</a></li>
                                <li><a href="#" onClick={this.showComponent.bind(this, "/dashboard/accountStatement")}>Live Bet History</a></li>,                             </ul>
                    
                    </li>
                </ul>
            </div>
        )
    }
}