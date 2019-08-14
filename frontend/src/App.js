
import React, { Component } from "react";
import "./App.css";
import CreateForm from "./Components/CreateForm";
import ChartDisplay from './ChartDisplay'

class App extends Component {
  state = { stats: null };

  render() {
    return (
      <div className="App">
        <p>Home!</p>
        <CreateForm setStats={this.setStats} />
        <ChartDisplay />
      </div>
    );
  }

  setStats = stats => {
    this.setState({ stats });
  };
}

export default App;
