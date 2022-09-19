import React from 'react';
import './ItemCard.css';

const Login = () => {
    return  (
        <section class="login-sec">
        <div class="login-div bg-light">
            <div class="login-box">
                <div class="login-box-header">
                <h3>Login</h3>
                </div>
                <div class="login-box-body">

                <form class="login-form">
                    <div class="form-group">
                    <label for="login-email">Email address</label>
                    <input
                        type="email"
                        class="form-control"
                        id="login-email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                    />
                    <small id="emailHelp" class="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                    </div>
                    <div class="form-group">
                    <label for="login-password">Password</label>
                    <input
                        type="password"
                        class="form-control"
                        id="login-password"
                        placeholder="Password"
                    />
                    </div>
                    <div class="form-group form-check">
                    <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                        Remember me
                    </label>
                    </div>
                    <button type="submit" class="btn btn-primary login-btn">
                    Login
                    </button>
                </form>
                </div>
                <div class="login-box-header sign-up">
                  <h3>Sign-up</h3>
                  </div>
                  <div class="login-box-body">

                  <form class="signup-form">
                    <div class="form-group">
                        <label for="signup-username">Username:</label>
                        <input type="text"
                          class="form-control type-username"
                          id="signup-username"
                          aria-describedby="usernameHelp"
                          placeholder=""  />
                    </div>
                    <div class="form-group">
                      <label for="signup-email">Email address</label>
                      <input
                          type="email"
                          class="form-control"
                          id="signup-email"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                      />
                      <small id="emailHelp" class="form-text text-muted">
                          We'll never share your email with anyone else.
                      </small>
                    </div>
                    <div class="form-group">
                      <label for="signup-password">Password</label>
                      <input
                          type="password"
                          class="form-control"
                          id="signup-password"
                          placeholder="Password"
                      />
                      </div>
                    <div class="form-group form-check">
                    </div>
                      <button type="submit" class="btn btn-primary">
                      Submit
                      </button>
                  </form>
                  </div>
            </div>
        </div>
    </section>
    );
};

export default Login;