import React, { Component } from 'react';
import './index.scss';
import * as authAction from '../../actions/auth'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { checkAuth } from '../../helpers/auth';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isAuthenticated: false,
      error: ''
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { error, isAuthenticated } = this.props;

    if (error && error !== prevProps.error) {
      this.setState({ error: 'Username or password is incorect!' });
    }

    if (isAuthenticated && isAuthenticated !== prevProps.isAuthenticated) {
      this.setState({ isAuthenticated });
    }
  }

  inputChange = e => {
    if (!e.target) {
      return;
    }
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.passwordLogin({ username, password });
  }

  render() {
    if (this.state.isAuthenticated || checkAuth()) {
      const { state } = this.props.location;

      if (state && state.from) {
        return <Redirect to={state.from} />
      }

      return <Redirect to='/clubs' />
    }

    return (
      <div className="container p-0">
        <h1 className="section-heading text-center fz-20">Login with bundesliga account</h1>
        <div className="row">
          <div className="col-sm-12">
            <div className="login">
              <form onSubmit={this.handleSubmit}>
                <div>
                  <input onChange={this.inputChange} value={this.state.username} required autoComplete="OFF" type="text" name="username" placeholder="User name" />
                </div>
                <div>
                  <input onChange={this.inputChange} value={this.state.password} required autoComplete="OFF" type="password" name="password" placeholder="Password" />
                </div>
                <button className="btn-login">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    ...auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    passwordLogin: (loginData) => dispatch(authAction.passwordLogin(loginData)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
