import React, { Component } from "react";
import "./style.sass";

class Page extends Component {
  render() {
    const { children, style } = this.props;
    return (
      <main className="page" style={style}>
        {children}
      </main>
    );
  }
}

export default Page;
