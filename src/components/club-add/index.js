import React, { Component } from 'react';
import './index.scss';
import * as clubsAction from '../../actions/clubs';
import { connect } from 'react-redux';

export class ClubAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      club: {
        name: '',
        coach: '',
        facebook: '',
        twitter: '',
        stadiumName: '',
        cssColor: '',
        cssBg: '',
        logo: '',
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { isUpdated, club } = this.props;

    if (club !== undefined && club !== prevProps.club && isUpdated === true) {
      if (this.props.history) {
        this.props.history.push(`/clubs/${club._id}`);
      }
    }
  }

  inputChange = e => {
    if (!e.target) {
      return;
    }

    const { name, value } = e.target;
    const club = this.state.club;

    this.setState({
      club: {
        ...club,
        [name]: value
      }
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    const { club } = this.state;
    const { name, stadiumName, coach, facebook, twitter, cssBg, cssColor, logo } = club;
    const payloads = {
      name,
      coach,
      stadium: {
        name: stadiumName,
      },
      social: {
        facebook,
        twitter
      },
      css: {
        bg: cssBg,
        color: cssColor
      },
      players: [],
      logo,
      address: null
    };

    this.props.createOne(payloads);
  }

  render() {
    const { club } = this.state;

    return (
      <div className="container p-0">
        <h1 className="section-heading text-center fz-20">Add club</h1>
        <div className="row">
          <div className="col-sm-12">
            <div className="bundesliga-form">
              <form onSubmit={this.handleSubmit} method="POST">
                <div className="row">
                  <div className="col-sm-6">
                    <input onChange={this.inputChange} value={club.name} required autoComplete="OFF" type="text" name="name" placeholder="Club name" />
                  </div>
                  <div className="col-sm-6">
                    <input onChange={this.inputChange} value={club.coach} required autoComplete="OFF" type="text" name="coach" placeholder="Coach" />
                  </div>
                  <div className="col-sm-6">
                    <input onChange={this.inputChange} value={club.stadiumName} required autoComplete="OFF" type="text" name="stadiumName" placeholder="Stadium" />
                  </div>
                  <div className="col-sm-6">
                    <input onChange={this.inputChange} value={club.facebook} required autoComplete="OFF" type="text" name="facebook" placeholder="Facebook" />
                  </div>
                  <div className="col-sm-6">
                    <input onChange={this.inputChange} value={club.twitter} required autoComplete="OFF" type="text" name="twitter" placeholder="Twitter" />
                  </div>
                  <div className="col-sm-6">
                    <input onChange={this.inputChange} value={club.cssBg} required autoComplete="OFF" type="text" name="cssBg" placeholder="Backgroud color" />
                  </div>
                  <div className="col-sm-6">
                    <input onChange={this.inputChange} value={club.cssColor} required autoComplete="OFF" type="text" name="cssColor" placeholder="Color" />
                  </div>
                  <div className="col-sm-6">
                    <input onChange={this.inputChange} value={club.logo} required autoComplete="OFF" type="text" name="logo" placeholder="Logo" />
                  </div>
                </div>
                <button className="btn-submit">Add club</button>
              </form>
            </div>
          </div>
        </div>
      </div>
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
    createOne: (payloads) => dispatch(clubsAction.createOne(payloads)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClubAdd);