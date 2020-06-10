import React, { Component } from "react";
import "./style.sass";

class UserList extends Component {
  state = {
    data: [],
    users: [],
    perPage: 4,
    page: 1,
    totalPages: null,
  };

  fetchData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    this.setState({
      data,
      users: data.data,
      totalPages: data.total_pages,
    });
  };

  updatePage = (page) => {
    const { perPage } = this.state;
    this.setState(
      {
        page,
      },
      () => {
        this.fetchData(
          `https://reqres.in/api/users?per_page=${perPage}&page=${page}`
        );
      }
    );
  };

  handleNav = (e) => {
    e.preventDefault();

    e.target.dataset.nav === "next"
      ? this.updatePage(this.state.page + 1)
      : this.updatePage(this.state.page - 1);
  };

  componentDidMount() {
    const { perPage, page } = this.state;

    this.fetchData(
      `https://reqres.in/api/users?per_page=${perPage}&page=${page}`
    );
  }

  render() {
    const { users, page, totalPages } = this.state;

    return (
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <img src={user.avatar} alt="" />
              <br />
              <h1>{user.first_name}</h1>
            </li>
          ))}
        </ul>
        {page > 1 && (
          <button onClick={this.handleNav} data-nav="prev">
            prev
          </button>
        )}
        {page < totalPages && (
          <button onClick={this.handleNav} data-nav="next">
            next
          </button>
        )}
      </div>
    );
  }
}

export default UserList;
