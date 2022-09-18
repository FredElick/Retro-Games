import React from "react";
import './Nav.css';

const Nav = () => {

    return (
        <div className="nav-links-bar">

        <div className="nav">
            <a href="/">home link</a>
            <a href="/Dashboard">dashboard link</a>
            <a href="/Console">consoles link</a>
            <a href="/Games">games link</a>
            <a href="/Login">login link</a>
            <a href="">logout link</a>
        </div>
    </div>
    );
};

export default Nav;