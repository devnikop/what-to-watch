import React from "react";
import PropTypes from "prop-types";

import { Operation } from "../../reducer/user/user";
import { connect } from "react-redux";

class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: ``,
      password: ``,
    };

    this._handleEmailChange = this._handleEmailChange.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handlePasswordChange = this._handlePasswordChange.bind(this);
  }

  render() {
    const { email, password } = this.state;

    return (
      <>
        <header className="page-header user-page__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <h1 className="page-title user-page__title">Sign in</h1>
        </header>
        <div className="sign-in user-page__content">
          <form className="sign-in__form" onSubmit={this._handleFormSubmit}>
            <div className="sign-in__message">
              {/* <p>Please enter a valid email address</p> */}
              {/* <p>
                We can’t recognize this email <br /> and password combination.
                Please try again.
              </p> */}
            </div>
            <div className="sign-in__fields">
              <div className="sign-in__field sign-in__field--error">
                <input
                  className="sign-in__input"
                  id="user-email"
                  name="user-email"
                  placeholder="Email address"
                  type="email"
                  value={email}
                  onChange={this._handleEmailChange}
                />
                <label
                  className="sign-in__label visually-hidden"
                  htmlFor="user-email"
                >
                  Email address
                </label>
              </div>
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  id="user-password"
                  name="user-password"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={this._handlePasswordChange}
                />
                <label
                  className="sign-in__label visually-hidden"
                  htmlFor="user-password"
                >
                  Password
                </label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }

  _handleEmailChange(evt) {
    this.setState({
      email: evt.target.value,
    });
  }

  _handleFormSubmit(evt) {
    const { tryAuthorize } = this.props;
    const { email, password } = this.state;
    tryAuthorize({ email, password });
    evt.preventDefault();
  }

  _handlePasswordChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }
}

SignIn.propTypes = {
  tryAuthorize: PropTypes.func.isRequired,
};

const mapDispatch = {
  tryAuthorize: Operation.tryAuthorize,
};

export { SignIn };
export default connect(null, mapDispatch)(SignIn);
