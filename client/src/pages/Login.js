import React from 'react';

var Login = React.createClass({
    render: function() {
      return (
  
        <section className="login-sec">
          <div id className="selection-div login-window">
            <div className="title-bar">
              <div className="blk-bars-div">
                <div className="blk-bar" />
                <div className="blk-bar" />
                <div className="blk-bar" />
                <div className="blk-bar" />
              </div>
              <a>Git Crash</a>
            </div>
            <div className="login">
              <div className="login-div bg-light">
                <div className="login-box">
                  <div className="login-box-header">
                    <pre className="pre-txt">
                    ░█░░░█▀█░█▀▀░▀█▀░█▀█
                    ░█░░░█░█░█░█░░█░░█░█
                    ░▀▀▀░▀▀▀░▀▀▀░▀▀▀░▀░▀</pre>
                  </div>
                  <div className="login-box-body">
                    {/* Login form */}
                    <form className="login-form">
                      <div className="form-group">
                        <label htmlFor="login-email">&gt; Email address</label>
                        <input type="email" className="form-control" id="login-email" aria-describedby="emailHelp" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="login-password">&gt; Password</label>
                        <input type="password" className="form-control" id="login-password" />
                      </div>
                      <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                          Remember me
                        </label>
                      </div>
                      <button type="submit" className="btn btn-primary login-btn">
                        Login
                      </button>
                    </form>
                  </div>
                  <pre className="dash">------------------------------------------------</pre>
                  <div className="login-box-header sign-up">
                    <pre className="pre-txt">
                    ░█▀▀░▀█▀░█▀▀░█▀█░░░░░█░█░█▀█
                    ░▀▀█░░█░░█░█░█░█░▄▄▄░█░█░█▀▀
                    ░▀▀▀░▀▀▀░▀▀▀░▀░▀░░░░░▀▀▀░▀░░</pre>
                  </div>
                  <div className="login-box-body">
                    {/* Signup form */}
                    <form className="signup-form">
                      <div className="form-group">
                        <label htmlFor="signup-username">&gt; Username:</label>
                        <input type="text" className="form-control type-username" id="signup-username" aria-describedby="usernameHelp" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="signup-email">&gt; Email address</label>
                        <input type="email" className="form-control" id="signup-email" aria-describedby="emailHelp" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="signup-password">&gt; Password</label>
                        <input type="password" className="form-control" id="signup-password" />
                      </div>
                      <div className="form-group form-check">
                      </div>
                      <button type="submit" className="btn btn-primary login-btn">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow login-shadow" />
          </div>
        </section>
      );
    }
  });

export default Login;