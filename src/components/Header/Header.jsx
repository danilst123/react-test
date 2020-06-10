import React, { Component } from "react";
import "./style.sass";

class Header extends Component {
  render() {
    const { children } = this.props;
    return (
      <header className="header">
        <div className="header__container">{children}</div>
      </header>
    );
  }
}

export default Header;
