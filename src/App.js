import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/Header';
import Featured from './components/featured/Featured';
import Info from './components/info/Info';

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ height: '1500px', backgroundColor: 'blue' }}
      >
        <Header />
        <Featured />
        <Info />
      </div>
    );
  }
}

export default App;
