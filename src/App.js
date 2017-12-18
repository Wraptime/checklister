import React, { Component } from 'react';
import logo from './logo.svg';
import List from './List'
import './App.css';
import pr from './lists/pr'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Checklister</h1>
        </header>
        <List items={ pr } />
      </div>
    );
  }
}

export default App;
