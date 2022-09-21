import React from "react";
import '/client/src/index.css';

const Nav = () => {

    return (
        <section class="header-sec">

        <div class="nav-links-bar">

            <div class="nav">
                <a href="index.html">Home</a>
                <a href="dashboard.html">Dashboard</a>
                <a href="consoles.html">Consoles</a>
                <a href="games.html">Games</a>
            </div>
            <div class="nav alt-nav">
                <a href="login.html">Login</a>
                <a href="">Logout</a>
            </div>
        </div>

    </section>
    );
};

export default Nav;