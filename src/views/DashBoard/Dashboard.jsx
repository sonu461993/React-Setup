import React, { Component } from "react";
import Container from "./Container.jsx";
import Header from "./Header.jsx";

export default class Dashboard extends Component
{
    constructor()
    {
        super();
    }

    render()
    {
        return(
            <div>
                <Header />
                <Container />
            </div>
        )
    }
}