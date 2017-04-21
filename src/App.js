import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';

class App extends Component {
  render() {
    return (
        <div>
        <div className="App">
            <Scoreboard />
        </div>

        <Header />
        </div>

    );
  }
}

export default App;
