import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import NavBar from "./NavBar.jsx";

export default class Header extends Component {
    constructor() {
        super();

        this.state = {
            dropDownOpen: false
        }
    }

    showDropDown() {
        this.setState({ dropDownOpen: !this.state.dropDownOpen })
    }
    render() {
        return (
            <div className="header_section">
                <div className="top_nav">
                    <div className="logo">
                        <img src="../../images/bet365daysuk.png" />
                    </div>

                    <div className="user_section">
                        <ul>
                            <li className="balance_section">
                                <span className="wallet_icon"> <img src="../../images/wallet-icons.png" /> </span>
                                <div className="info">
                                    <div>
                                        <span className="wallet">Main: </span>
                                        <span className="walletMoney">0.00 </span>
                                    </div>

                                    <div className="userLiability">
                                        <span className="liability">Exposure: </span>
                                        <span className="liabilityMoney">0.00</span>
                                    </div>
                                </div>
                            </li>

                            <li className="accountSection" onClick={this.showDropDown.bind(this)}>
                                <span>
                                    <img src="../../images/user-ico.svg" />
                                </span>
                                <span className="userName">Test666</span>
                                <span className="arrow arrow_bottom"></span>

                                {
                                    this.state.dropDownOpen && 
                                    <ul className="dropdown">
                                        <li className="dropdown_menu">
                                            <a> Change Password</a>
                                        </li>
                                        <li className="dropdown_menu">
                                            <a> Logout</a>
                                        </li>
                                    </ul>
                                }
                            </li>
                        </ul>
                       

                    </div>
                </div>
                <BrowserRouter >
                    <Switch>
                        <NavBar />
                    </Switch>
                </BrowserRouter>
                
            </div>
        )
    }
}