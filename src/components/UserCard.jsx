import React, { Component } from "react";

class UserCard extends Component {
  render() {
    const { login, avatar_url, html_url, bio } = this.props.comingData;
    return (
      <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={avatar_url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{login}</h5>
            <p className="card-text">{bio}</p>
            <a href={html_url} target="_blank" rel="noreferrer" className="btn btn-primary">
              Go Profile
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCard;
