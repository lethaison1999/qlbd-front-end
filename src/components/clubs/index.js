import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';
import * as clubsAction from '../../actions/clubs';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

class Clubs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      clubs: []
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { clubs } = this.props;

    if (clubs && clubs !== prevProps.clubs) {
      this.setState({ clubs });
    }
  }

  componentDidMount() {
    this.props.findAll({});
  }

  render() {
    const clubs = this.state.clubs.map(each => (
      <div key={each._id} className="col-sm-4">
        <NavLink to={`/clubs/${each._id}`} style={{ color: each.css?.color }}>
          <div className="club">
            <div className="left" style={{ backgroundColor: each.css?.bg, color: each.css?.color }}>
              <div className="club-name">{each.name}</div>
              <div className="club-stadium">{each.stadium?.name}</div>
            </div>
            <div className="right">
              <div className="logo" style={{ backgroundColor: '#9a0a21' }}>
                <img src={each.logo} alt="" />
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    ));

    return (
      <>
        <Helmet>
          <title>Clubs</title>
        </Helmet>
        <div className="container p-0">
          <h1 className="section-heading">Club overview | Season 2020-2021</h1>
          <div className="row">
            {clubs}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ clubs }) => {
  return {
    ...clubs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    findAll: (params) => dispatch(clubsAction.findAll(params)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Clubs);
