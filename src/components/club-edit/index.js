import React, { Component } from 'react';
import './index.scss';
import * as clubsAction from '../../actions/clubs';
import { connect } from 'react-redux';

export class ClubEdit extends Component {

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
    const { club, isUpdated } = this.props;

    if (club && club !== prevProps.club) {
      const payloads = {
        name: club.name,
        coach: club.coach,
        stadiumName: club.stadium?.name,
        facebook: club.social?.facebook,
        twitter: club.social?.twitter,
        cssColor: club.css?.color,
        cssBg: club.css?.bg,
        logo: club.logo
      }
      this.setState({ club: payloads });
    }

    if (isUpdated !== undefined && isUpdated !== prevProps.isUpdated) {
      if (this.props.history) {
        this.props.history.goBack();
      }
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    if (id) {
      this.props.findOne(id);
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
    const { id } = this.props.match.params;

    if (!id) {
      return;
    }

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

    this.props.updateOne(id, payloads);
  }

  render() {
    const { club } = this.state;

    return (
      <div className="container p-0">
        <h1 className="section-heading text-center fz-20">Edit club</h1>
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
                <button className="btn-submit">Edit {club.name}</button>
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
    findOne: (_id) => dispatch(clubsAction.findOne(_id)),
    updateOne: (_id, payloads) => dispatch(clubsAction.updateOne(_id, payloads)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClubEdit);