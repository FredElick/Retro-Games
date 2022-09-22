import React from "react";


const Nav = () => {

    return (
        <section class="header-sec">
            <div class="nav-links-bar">
                <div class="nav">
                    <a href="/">Home</a>
                    <a href="/Dashboard">Dashboard</a>
                    <a href="/Console">Consoles</a>
                    <a href="/Games">Games</a>
                </div>
                <div class="nav alt-nav">
                    <a href="/Login">Login</a>
                    <a href="">Logout</a>
                </div>
            </div>
        </section>
    );
};

export default Nav;