import React, { PureComponent } from 'react';

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
  };

  render() {
    const { prices, positions, description, link } = this.state;

    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">
            {prices.map((price, index) => (
              <div className="pricing_item" key={index}>
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
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;
