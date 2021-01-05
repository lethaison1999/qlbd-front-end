import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { checkAuth, logout } from '../../helpers/auth';
import { menus } from '../../routers/menus';
import './index.scss';

const Menus = menus.map(({ text, path }, idx) => {
  return (
    <li key={idx}>
      <NavLink to={path}>{text}</NavLink>
    </li>
  )
});

export class Header extends Component {

  state = {
    logout: false
  }

  onLogout = (e) => {
    e.preventDefault();
    logout();
    window.location.href = '/login';
  }

  render() {
    return (
      <header className="container-fluid">
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="logo d-flex align-items-center">
                <NavLink to={'/'}>
                  <img alt="bundesliga.com" src="https://www.bundesliga.com/assets/logo/bundesliga.svg" className="ng-star-inserted" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="container h-100 p-0">
            <nav>
              <ul>
                {Menus}
                <li className="divider"></li>
                {
                  checkAuth() === false ? (
                    <li>
                      <NavLink to={'/login'} style={{ padding: '15px 20px' }}>
                        <i className="fas fa-user" />
                      </NavLink>
                    </li>) : null
                }
                <li>
                  <a onClick={this.onLogout} href="/">
                    <i className="fas fa-sign-out-alt"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
