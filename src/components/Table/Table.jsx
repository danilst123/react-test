import React, { Component } from "react";

const data = [
  { id: 0, price: 100, title: "Jack" },
  { id: 1, price: 120, title: "Jill" },
  { id: 2, price: 99, title: "Sam" },
  { id: 3, price: 350, title: "Anna" },
];

const sortTable = (a, b) => a[key] - b[key];

class Table extends Component {
  state = {
    table: data,
    arr: [],
  };

  componentDidMount() {
    const array = [];

    console.log(array);
  }

  sort = () => {
    console.log("asd");
  };

  render() {
    const { table } = this.state;
    return (
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th onClick={this.sort}>price</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
          {table.map((row, index) => (
            <tr key={index}>
              <td>{row.id}</td>
              <td>{row.price}</td>
              <td>{row.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
