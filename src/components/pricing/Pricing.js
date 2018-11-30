import React, { PureComponent } from 'react';
import Zoom from 'react-reveal/Zoom';

import Button from './../Button';

class Pricing extends PureComponent {
  state = {
    prices: [100, 150, 200],
    positions: ['Balcony', 'Medium', 'Star'],
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et vestibulum ante.',
      'Sed ut dui sed sapien ultrices suscipit. Praesent quis felis quis metus fringilla volutpat.',
      'Morbi finibus auctor venenatis. Aenean rutrum felis dapibus, iaculis metus in, ultrices ex.',
    ],
    link: ['#balcony', '#medium', '#star'],
    delay: [500, 0, 500],
  };

  render() {
    const { prices, positions, description, link, delay } = this.state;

    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">
            {prices.map((price, index) => (
              <Zoom key={index} delay={delay[index]}>
                <div className="pricing_item">
                  <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                      <span>${prices[index]}</span>
                      <span>{positions[index]}</span>
                    </div>
                    <div className="pricing_description">
                      {description[index]}
                    </div>
                    <div className="pricing_buttons">
                      <Button link={link[index]} bck="#ffa800" color="#fff">
                        Purchase tickets
                      </Button>
                    </div>
                  </div>
                </div>
              </Zoom>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;
