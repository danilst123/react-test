import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../Input/Input";
import "./style.sass";

export class Auth extends Component {
  wrapper = document.createElement("div");

  componentDidMount() {
    this.wrapper.classList.add("auth");
    document.body.appendChild(this.wrapper);
  }

  componentWillUnmount() {
    document.body.removeChild(this.wrapper);
  }

  render() {
    const { initialAuthValues, handleAuthChange, onAuthSubmit } = this.props;
    const content = (
      <>
        <div className="auth__bg"></div>
        <form className="auth__form" action="" onSubmit={onAuthSubmit}>
          <h1 className="auth__head">Войти</h1>
          <Input
            name="login"
            type="text"
            className="input auth__input"
            value={initialAuthValues.login}
            placeholder="Ведите Логин"
            onChange={handleAuthChange}
          />
          <Input
            name="password"
            type="password"
            className="input auth__input"
            value={initialAuthValues.password}
            placeholder="Ведите Пароль"
            onChange={handleAuthChange}
          />
          <button type="submit">Войти</button>
        </form>
      </>
    );
    return ReactDOM.createPortal(content, this.wrapper);
  }
}

export default Auth;
