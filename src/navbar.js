import React, { Component } from "react"
import logo from './images/abb_logo.svg';

class Navbar extends Component {
    render () {
        return (
            <nav className="navbar navbar-default">
                <div className="navbar-wrapper">
                    <div className="container-fluid position-menu">
                        <div className="navbar-header">
                            <a href="#" className="navbar-brand">
                                <img  className="logo" src={logo} alt="ABB"/>
                            </a>
                        </div>
                        <ul className="nav navbar-nav abb-menu hidden-xs">
                            <li><a href="#about">O Nas</a></li>
                            <li><a href="#foryou">Dla Ciebie</a></li>
                            <li><a href="#joinus">Dołącz do nas</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar