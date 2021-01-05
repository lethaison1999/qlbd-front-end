import React, { Component } from 'react';
import './index.scss';

export class MatchAdd extends Component {

  render() {
    return (
      <div className="container p-0">
        <h1 className="section-heading text-center fz-20">Add a match</h1>
        <div className="row">
          <div className="col-sm-12">
            <div className="bundesliga-form">
              <form method="POST">
                <div className="row">
                  <div className="col-sm-6">
                    <input autoComplete="OFF" type="text" name="username" placeholder="User name" />
                  </div>
                  <div className="col-sm-6">
                    <input autoComplete="OFF" type="text" name="username" placeholder="User name" />
                  </div>
                  <div className="col-sm-6">
                    <input autoComplete="OFF" type="text" name="username" placeholder="User name" />
                  </div>
                  <div className="col-sm-6">
                    <input autoComplete="OFF" type="text" name="Note" placeholder="User name" />
                  </div>
                  <div className="col-sm-6">
                    <select name="club" id>
                      <option value="All">Season</option>
                      <option value="All">2018 - 2019</option>
                      <option value="All">2019 - 2020</option>
                      <option value="All">2020 - 2021</option>
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <select name="club" id>
                      <option value="All">Team home</option>
                      <option value="All">Club1</option>
                      <option value="All">Club2</option>
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <select name="club" id>
                      <option value="All">Team away</option>
                      <option value="All">Club1</option>
                      <option value="All">Club2</option>
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <input type="datetime-local" placeholder="Time" name="time" />
                  </div>
                </div>
                <button className="btn-submit">Add a match</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
