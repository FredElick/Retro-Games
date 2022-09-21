import React from "react";


var Nav = React.createClass({
    render: function() {
      return (
  
        <section className="header-sec">
          {/* Nav */}
          <div className="nav-links-bar">
            {/* these nav links will need to be updated once added to repo */}
            <div className="nav">
              <a href="index.html">Home</a>
              <a href="dashboard.html">Dashboard</a>
              <a href="consoles.html">Consoles</a>
              <a href="games.html">Games</a>
            </div>
            <div className="nav alt-nav">
              <a href="login.html">Login</a>
              <a href>Logout</a>
            </div>
          </div>
        </section>
      );
    }
  });

export default Nav;