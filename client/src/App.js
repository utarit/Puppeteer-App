import React, { Component } from 'react';
import logo from './puppet.png';
import './App.css';
import PageContent from './components/pageContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pupetter Sample App</h1>
        </header>
        <PageContent />
      </div>
    );
  }
}

export default App;
