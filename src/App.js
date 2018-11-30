import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/Header';
import Featured from './components/featured/Featured';
import Info from './components/info/Info';
import Highlights from './components/highlights/Highlights';
import Pricing from './components/pricing/Pricing';

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
        <Highlights />
        <Pricing />
      </div>
    );
  }
}

export default App;
