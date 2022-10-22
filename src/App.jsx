import axios from "axios";
import React, { Component, Fragment } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import UserList from "./components/UserList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users:[],
    };
  }

  searchUser = (keyword) => {
    axios
      .get(`https://api.github.com/search/users?q=${keyword}`)
      .then((res) => this.setState({ users:res.data.items }))
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <Fragment>
        <Navbar url="https://github.com/" />
        <Search searchValue={this.searchUser} />
        <UserList userValue={this.state.users} />
        {console.log(this.state.users)}
      </Fragment>
    );
  }
}

export default App;
