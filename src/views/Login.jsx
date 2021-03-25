import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './DashBoard/Dashboard.jsx';

export default class Login extends Component {

    constructor() {
        super();
    }

    onLoginClick(e)
    {
        this.props.history.push('/dashboard');
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <div className="login_mainContainer">
                    <div className="loginBox">
                        <div className="loginLogo">
                            <img src="../images/bet365daysuk.png" alt="" className="logo" />
                        </div>

                        <form className="login">
                            <div className="username">
                                <input type="text" className="uname" placeholder="Enter Username" />
                            </div>
                            <div className="password">
                                <input type="password" className="pass" placeholder="Enter Password" />

                            </div>

                            <div className="rememberMe">
                                <input type="checkbox" id="remember" value="remember"/>
                                <label htmlFor="remember" className="rememberMe">Remember Me</label>
                            </div>

                            <div className="loginBtn">
                                <button onClick={this.onLoginClick.bind(this)}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}