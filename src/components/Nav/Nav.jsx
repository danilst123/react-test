import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.sass";

import PropTypes from "prop-types";

class Nav extends Component {
  static propTypes = {
    menuItems: PropTypes.array,
  };

  render() {
    const { menuItems } = this.props;
    return (
      <menu className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <Link className="menu__link" to="/" exact="true">
              main
            </Link>
          </li>
          {menuItems.map((item, index) => (
            <li key={index} className="menu__item">
              <Link className="menu__link" to={`/${item.path}`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </menu>
    );
  }
}

export default Nav;
