import React, { Component } from "react";
import "./App.css";
import { Resources } from "./resources";

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          {" "}
          <h3> Welcome to Open API Documentation </h3>{" "}
        </header>

        <aside>
          <h3>Resources</h3> <Resources />
        </aside>

        <main>
          <h2> Main Content</h2>
        </main>
      </div>
    );
  }
}

export default App;
