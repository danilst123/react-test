import React, { Component } from "react";
import ReturnBackLink from "../ReturnBackLink/ReturnBackLink";
import PageTitle from "../PageTitle/PageTitle";

import { CSSTransition } from "react-transition-group";

class Todo extends Component {
  render() {
    return (
      <CSSTransition classNames="blob" in={true} appear={true} timeout={1000}>
        <ReturnBackLink />
        <PageTitle>Todo</PageTitle>
      </CSSTransition>
    );
  }
}

export default Todo;
