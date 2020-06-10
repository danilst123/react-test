import React, { Component } from "react";
import ReactDOM from "react-dom";
import withDateLog from "../../hoc/withDateLog";
import AlbumsList from "../AlbumsList/AlbumsList";

// HOC
const AlbumsListWithDateLog = withDateLog(AlbumsList);

// Forwared functional Component
let Bye = (props, ref) => <h1 ref={ref}>Bye</h1>;
Bye = React.forwardRef(Bye);

const ByeWithDateLog = withDateLog(Bye);

// Forwared Component
class Hello extends Component {
  render() {
    return <h1 ref={this.props.ref}>Hello</h1>;
  }
}
const ByeWithDateLogComp = React.forwardRef((props, ref) => {
  return <ByeWithDateLog {...props} ref={ref} />;
});

// Portal
class Portal extends Component {
  el = document.createElement("div");

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

// Context
const ThemeContext = React.createContext("adasd");
ThemeContext.displayName = "Bugaga";

export class Test extends Component {
  state = {
    count: 2,
    data: null,
    theme: "light",
  };

  hiRef = React.createRef();
  byeRef = React.createRef();

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  recieveData = (url) => {
    fetch(url)
      .then((value) => value.json())
      .then((data) => this.setState({ data: data.data }));
  };

  componentDidMount() {
    this.recieveData("https://reqres.in/api/users?page=2");
    console.log(this.hiRef.current);
    console.log(this.byeRef.current);
  }

  handleClick() {
    console.log("asd");
  }

  render() {
    const { count, data, theme } = this.state;
    return (
      <div onClick={this.handleClick}>
        <ThemeContext.Provider value={theme}>
          {count}
          <br />
          <input
            onChange={this.handleChange}
            value={count}
            name="count"
            type="text"
          />
          <ByeWithDateLogComp />
          {/* <ThemeContext.Consumer>
            {(value) => <Bye ref={this.byeRef} value={value} />}
          </ThemeContext.Consumer> */}
          <ThemeContext.Provider value="dark">
            <ThemeContext.Consumer>
              {(value) => {
                return (
                  <Portal theme={value}>
                    <button>{value}</button>
                  </Portal>
                );
              }}
            </ThemeContext.Consumer>
          </ThemeContext.Provider>
        </ThemeContext.Provider>
        <AlbumsListWithDateLog ref={this.hiRef} users={data} albums={[]} />
      </div>
    );
  }
}

export default Test;
