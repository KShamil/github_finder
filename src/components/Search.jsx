import React, { Component } from "react";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      keyword: "",
    };
  }

  inputChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };

  formSubmit = (e) => {
    e.preventDefault();
    this.props.searchValue(this.state.keyword);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.formSubmit}>
          <div className="input-group mb-3">
            <input
              onChange={this.inputChange}
              type="text"
              className="form-control"
              placeholder="Search Username"
              aria-label="Search Username"
              aria-describedby="button-addon2"
            />
            <button
              className="search_btn btn btn-outline-success"
              type="submit"
              id="button-addon2"
            >
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
