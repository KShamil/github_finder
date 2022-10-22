import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" target="_blank" rel="noreferrer" href={this.props.url}>
            <i class="fa-brands fa-github"></i> Github Finder
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
