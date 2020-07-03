import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentDidMount() {
    console.log("mounted");
  }

  render() {
    var word = "Hello";
    var style = { fontSize: "20px" };

    return (
      <div>
        <p style={style} className="text-large">
          Hi
        </p>
        <img src="none.jpg" />
        <div>
          <p>(word)</p>
        </div>
      </div>
    );
  }
}

export default App;
