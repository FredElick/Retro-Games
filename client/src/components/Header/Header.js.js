import React from "react";
import './Header.css';

const Header = () => {
    return (
        <section className="header-sec">

            {/* <!-- Nav --> */}
            <div className="nav-links-bar">

                <div className="nav">
                    <a href="home.html">home link</a>
                    <a href="dashboard.html">dashboard link</a>
                    <a href="consoles.html">consoles link</a>
                    <a href="games.html">games link</a>
                    <a href="login.html">login link</a>
                    <a href="">logout link</a>
                </div>
            </div>

            <a href="https://blockbuster.com/" target="_blank" class="bb-add">
            </a>

            <div className="header-logo">
            </div>
        </section>
    );
};

export default Header;