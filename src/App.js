import React, { Component } from 'react';
import { Element } from 'react-scroll';
import './resources/styles.css';

import Header from './components/Header';
import Featured from './components/featured/Featured';
import Info from './components/info/Info';
import Highlights from './components/highlights/Highlights';
import Pricing from './components/pricing/Pricing';
import Location from './components/location/Location';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: '1500px' }}>
        <Header />

        <Element name="home">
          <Featured />
        </Element>

        <Element name="info">
          <Info />
        </Element>

        <Element name="highlights">
          <Highlights />
        </Element>

        <Element name="pricing">
          <Pricing />
        </Element>

        <Element name="location">
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;
