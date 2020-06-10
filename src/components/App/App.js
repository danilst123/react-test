import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Auth from "../Auth/Auth";
import Page from "../Page/Page";
import Blog from "../Blog/Blog";
import PageMenu from "../PageMenu/PageMenu";
import Post from "../Post/Post";
import Todo from "../Todo/Todo";
import Page404 from "../Errors/404";

const Users = [
  { login: "admin", password: "admin" },
  { login: "123", password: "123" },
];
const Pages = [
  { name: "blog", path: "blog" },
  { name: "todo", path: "todo" },
];

export default class App extends Component {
  state = {
    isAuthorized: true,
    bgColors: ["#455a64", "#e57373", "#03a9f4"],
    initialAuthValues: {
      login: "",
      password: "",
    },
    blog: {
      data: [],
      users: [],
      perPage: 12,
      page: 1,
      apiURL: "https://reqres.in/api/",
      requestTarget: "users",
      requestURL: "",
      totalPages: null,
    },
    searchData: {
      keywords: "",
      palceholder: "Введите ключевые слова...",
    },
  };

  handleAuthChange = (e) => {
    e.persist();

    this.setState((prevState) => {
      return {
        ...prevState,
        initialAuthValues: {
          ...prevState.initialAuthValues,
          [e.target.name]: e.target.value,
        },
      };
    });
  };

  onAuthSubmit = (e) => {
    e.preventDefault();
    e.persist();

    const { login, password } = this.state.initialAuthValues;
    const userIsExist = Users.some(
      (user) => user.login === login && user.password === password
    );

    this.setState({
      isAuthorized: userIsExist,
    });
  };

  handleSearchSubmit = (e) => {
    e.preventDefault();

    const { blog, searchData } = this.state;

    const users = searchData.keywords
      ? blog.data.data.filter(
          (user) =>
            user.first_name.toLowerCase().indexOf(searchData.keywords) === 0
        )
      : blog.data.data;

    console.log(users);

    this.setState({
      blog: {
        ...blog,
        users,
      },
    });
  };

  handleSearchChange = (e) => {
    e.preventDefault();

    this.setState({
      searchData: {
        ...this.state.searchData,
        keywords: e.target.value,
      },
    });
  };

  handleSearchClear = (e) => {
    e.preventDefault();

    const { blog, searchData } = this.state;

    this.setState({
      blog: {
        ...blog,
        users: blog.data.data,
      },
      searchData: {
        ...searchData,
        keywords: "",
      },
    });
  };

  fetchData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    this.setState({
      blog: {
        ...this.state.blog,
        data,
        users: data.data,
        totalPages: data.total_pages,
      },
    });
  };

  updatePage = (page) => {
    const { perPage, apiURL, requestTarget, requestURL } = this.state;

    this.setState(
      {
        requestURL: `${apiURL}${requestTarget}?per_page=${perPage}&page=${page}`,
      },
      () => {
        this.fetchData(requestURL);
      }
    );
  };

  componentDidMount() {
    const { perPage, page } = this.state.blog;

    this.fetchData(
      `https://reqres.in/api/users?per_page=${perPage}&page=${page}`
    );
  }

  render() {
    const {
      initialAuthValues,
      isAuthorized,
      bgColors,
      blog,
      searchData,
    } = this.state;
    const { apiURL, requestTarget } = blog;

    const auth = (
      <Auth
        initialAuthValues={initialAuthValues}
        handleAuthChange={this.handleAuthChange}
        onAuthSubmit={this.onAuthSubmit}
      />
    );

    const content = (
      <Router>
        <Page style={{ background: bgColors[0] }}>
          <Switch>
            <Route path="/" exact>
              <PageMenu pages={Pages} />
            </Route>
            <Route
              path="/blog"
              exact
              render={(props) => (
                <Blog
                  blog={blog}
                  handleSearchSubmit={this.handleSearchSubmit}
                  handleSearchChange={this.handleSearchChange}
                  handleSearchClear={this.handleSearchClear}
                  searchData={searchData}
                  {...props}
                />
              )}
            />
            <Route
              path="/blog/:id"
              render={(props) => (
                <Post url={apiURL + requestTarget} {...props} />
              )}
            />
            <Route path="/todo" component={Todo} />
            <Route path="*" component={Page404} />
          </Switch>
        </Page>
      </Router>
    );

    return !isAuthorized ? auth : content;
  }
}
