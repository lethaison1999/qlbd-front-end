import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from '../../commons/components';
import { routers } from '../../routers/routers';
import { Footer } from '../footer';
import { Header } from '../header';
import './index.scss';

export class Main extends Component {
  createRoutes = (routes) => (routes.map((each, key) => {
    const { path, component, isPrivate } = each;

    if (isPrivate === true) {
      return (
        <PrivateRoute
          path={path}
          component={component}
          key={key}
          exact={true}
        />
      );
    }
  
    return (
      <Route
        path={path}
        component={component}
        key={key}
        exact={true}
      />
    );
  }))

  render() {
    return (
      <>
        <Header logout={this.logout} />
        <div className="container-fluid">
          <div className="main">
            <Switch>
              {this.createRoutes(routers)}
              <Redirect from='/' to='/error/404' />
            </Switch>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
