import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';
import * as matchesAction from '../../actions/matches';
import * as seasonsAction from '../../actions/seasons';
import * as clubsAction from '../../actions/clubs';
import { connect } from 'react-redux';

class Matches extends Component {

  constructor(props) {
    super(props);
    this.state = {
      matches: [],
      seasons: [],
      clubs: []
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { matches, seasons, clubs } = this.props;

    if (matches && matches !== prevProps.matches) {
      this.setState({ matches });
    }

    if (seasons && seasons !== prevProps.seasons) {
      this.setState({ seasons });
    }

    if (clubs && clubs !== prevProps.clubs) {
      this.setState({ clubs });
    }
  }

  componentDidMount() {
    this.props.findAll({});
    this.props.findAllSeasons({});
    this.props.findAllClubs({});
  }

  tools = ['add', 'edit', 'list', 'delete'].map(each => (
    <NavLink key={each} activeClassName="active" to={`/matchs/manage/${each}`}>{each}</NavLink>
  ));

  render() {
    const matches = this.state.matches.map(each => {
      const { homeClubId, awayClubId, result, played } = each;
      return (
        <div key={each._id} className="match-item">
          <NavLink to={`/matches/${each._id}`}>
            <div className="team-home">
              <div className="club-name">{homeClubId?.name}</div>
              <div className="club-logo">
                <img src={homeClubId?.logo} alt={homeClubId?.name} />
              </div>
            </div>
            <div className="match-results">
              {
                (played === true) ? (
                  <div className="score">
                    <span>{result?.fullTime?.home}</span>
                    <span>:</span>
                    <span>{result?.fullTime?.away}</span>
                  </div>
                ) : (
                    <div className="score">
                      <span>-</span>
                      <span>:</span>
                      <span>-</span>
                    </div>
                  )
              }
              <div className="stadium-name">{homeClubId?.stadium?.name}</div>
            </div>
            <div className="team-away">
              <div className="club-logo">
                <img src={awayClubId?.logo} alt={awayClubId?.name} />
              </div>
              <div className="club-name">{awayClubId?.name}</div>
            </div>
          </NavLink>
        </div>
      )
    });

    return (
      <div className="container p-0">
        <div className="row">
          <div className="col-sm-6">
            <h1 className="section-heading fz-20">MATCHDAY 14 | SEASON 2020-2021
          </h1>
          </div>
          {/* <div className="col-sm-6">
            <div className="matchs-select">
              <div>
                <select name="club">
                <option value={null}>All</option>
                  {
                    this.state.clubs.map(each => (
                      <option key={each._id} value={each._id}>{each.name}</option>
                    ))
                  }
                </select>
              </div>
              <div>
                <select name="season">
                  {
                    this.state.seasons.map(each => (
                      <option key={each._id} value={each._id}>{each.name}</option>
                    ))
                  }
                </select>
              </div>
            </div>
          </div> */}
        </div>
        <div className="match-list">
          {/* <div className="kickoff-date">
            <div> Saturday, 02-Jan-2021 | 21:30</div>
          </div> */}
          {matches}
        </div>
        {/* <div className="tools">
          {this.tools}
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = ({ matches, seasons, clubs }) => {
  return {
    ...matches,
    seasons: seasons.seasons,
    clubs: clubs.clubs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    findAll: (params) => dispatch(matchesAction.findAll(params)),
    findAllSeasons: (params) => dispatch(seasonsAction.findAll(params)),
    findAllClubs: (params) => dispatch(clubsAction.findAll(params)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
