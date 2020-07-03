import React, { Component } from "react";

import NameComponent from "./components/NameComponent";

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
        <NameComponent />
      </div>
    );
  }
}

export default App;
