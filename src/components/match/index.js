import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';
import * as matchsAction from '../../actions/matches';
import { connect } from 'react-redux';
import moment from 'moment';

class Match extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: {}
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { results } = this.props;

    if (results && results !== prevProps.results) {
      this.setState({ results });
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    if (id) {
      this.props.findOne(id);
    }
  }

  render() {
    const { results } = this.state;
    const { homeClubId, awayClubId, result, played, playTime } = results;
    const time = !playTime ? '' : moment(playTime).format('dddd, h:mm');

    return (
      <div className="container">
        <div className="match-center" style={{ backgroundImage: 'url(https://www.bundesliga.com/assets/stadiums/stadium-rbl.jpg)' }}>
          <div className="text-box">
            <div className="match-day">
              <NavLink to={'/matches'}>{time}</NavLink>
            </div>
            <div className="stadium">{homeClubId?.stadium?.name}</div>
          </div>
          <div>
            <div className="match-box">
              <div className="home" style={{ backgroundColor: '#fff' }}>
                <NavLink to={'/clubs/1'}>
                  <img alt="" src="https://img.bundesliga.com/tachyon/sites/2/2020/08/Leipzig-RBL.png?fit=120" />
                </NavLink>
              </div>
              <div className="result">
                {
                  (played === true) ? (
                    <div className="score">
                      <span>-</span>
                      <span>:</span>
                      <span>-</span>
                    </div>
                  ) : (
                      <>
                        <div className="score">
                          <span>{result?.fullTime?.home}</span>
                          <span>:</span>
                          <span>{result?.fullTime?.away}</span>
                        </div>
                        <div className="score-halftime">
                          <span>{result?.haftTime?.home}</span>
                          <span>:</span>
                          <span>{result?.haftTime?.away}</span>
                        </div>
                      </>
                    )
                }
                <div className="halftime">
                  final
              </div>
              </div>
              <div className="away" style={{ backgroundColor: '#e10000' }}>
                <NavLink to={'/clubs/1'}>
                  <img src="https://img.bundesliga.com/tachyon/sites/2/2020/08/Koeln-KOE.png?fit=120" alt="" />
                </NavLink>
              </div>
            </div>
            <div className="names">
              <NavLink to={`/clubs/${homeClubId?._id}`} className="home">{homeClubId?.name}</NavLink>
              <NavLink to={`/clubs/${awayClubId?._id}`} className="away">{awayClubId?.name}</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ matches }) => {
  return {
    results: matches.match
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    findOne: (_id) => dispatch(matchsAction.findOne(_id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Match);
