import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class RouterTest extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">main</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/catalog">Catalog</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/catalog" component={Catalog} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const Main = () => <h1>Main</h1>;
const About = () => <h1>About</h1>;
const Contacts = () => <h1>Contacts</h1>;
const Catalog = () => <h1>Catalog</h1>;

export default RouterTest;
