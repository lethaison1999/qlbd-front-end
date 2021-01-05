import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';
import * as clubsAction from '../../actions/clubs';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

class Club extends Component {

  constructor(props) {
    super(props);

    this.state = {
      club: {}
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { club } = this.props;

    if (club && club !== prevProps.club) {
      this.setState({ club });
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    if (id) {
      this.props.findOne(id);
    }
  }

  render() {
    const { club } = this.state;

    const tools = [
      { text: 'edit', link: `clubs/manage/edit/${club._id}` },
      { text: 'list', link: 'clubs' },
      { text: 'add', link: 'clubs/manage/add' }
    ].map(each => (
      <NavLink key={each.text} to={`/${each.link}`}>{each.text}</NavLink>
    ));

    return (
      <>
        <Helmet>
          <title>{club.name}</title>
        </Helmet>
        <div className="container p-0 pt-3">
          <div className="club-info" style={{ backgroundColor: club.css?.bg, color: club.css?.color }}>
            <div className="stadium-name">{club.stadium?.name}</div>
            <div className="club-and-logo">
              <div className="club-name">
                {club.name}
              </div>
              <div className="club-logo">
                <img src={club.logo} alt="" />
              </div>
            </div>
            <div className="links">
              <a target="blank" href="/" style={{ color: club.css?.color }}>
                <i className="fas fa-external-link-square-alt" />
                <span>Club</span>
              </a>
              <a target="blank" href={club.social?.facebook} style={{ color: club.css?.color }}>
                <i className="fab fa-facebook-f" />
              </a>
              <a target="blank" href={club.social?.twitter} style={{ color: club.css?.color }}>
                <i className="fab fa-twitter" />
              </a>
            </div>
          </div>
          <div className="tools">
            {tools}
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
    findOne: (_id) => dispatch(clubsAction.findOne(_id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Club);