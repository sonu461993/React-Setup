import React, { Component } from "react";

export default class Sidebar extends Component
{
    constructor()
    {
        super();
    }    

    render()
    {
        return(
            <div className="sidebar">
                <ul>
                    <li><a href="#"> Sports</a></li>
                    <li><a href="#"> In-Play</a></li>
                    <li><a href="#"> Cricket</a></li>
                    <li><a href="#"> Tennis</a></li>
                    <li><a href="#"> Soccer</a></li>
                </ul>
            </div>
        )
    }
}