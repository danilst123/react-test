import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./style.sass";

import Icons from "./icons.svg";

const Icon = ({ name, color, size }) => (
  <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#${name}`} />
  </svg>
);

class PageMenu extends Component {
  static propTypes = {
    pages: PropTypes.array,
  };

  render() {
    const { pages = [] } = this.props;
    return (
      <CSSTransition classNames="blob" in={true} appear={true} timeout={1000}>
        <ul className="pageMenu">
          {pages.map((item, index) => (
            <li key={index} className="pageMenu__item">
              <Link className="pageMenu__link" to={`/${item.path}`}>
                <Icon name={item.name} color="currentColor" size="100px" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </CSSTransition>
    );
  }
}

export default PageMenu;
