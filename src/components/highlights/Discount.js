import React, { PureComponent } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import Button from '../Button';

class Discount extends PureComponent {
  state = {
    discountStart: 0,
    discountEnd: 30,
  };

  componentDidUpdate() {
    setTimeout(this.percentage, 40);
  }

  percentage = () => {
    const { discountStart, discountEnd } = this.state;

    if (discountStart < discountEnd) {
      this.setState({
        discountStart: discountStart + 1,
      });
    }
  };

  render() {
    const { discountStart } = this.state;

    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={this.percentage}>
            <div className="discount_porcentage">
              <span>{discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 20th JUNE</h3>
              <p>
                Duis sit amet ligula massa. Duis tincidunt lectus nec erat
                viverra, a vulputate ex sagittis. Ut finibus aliquam mauris et
                sagittis. Proin a purus facilisis, dignissim nulla a, accumsan
                nisl. Phasellus tincidunt libero quis auctor tincidunt.
                Curabitur at eros erat.
              </p>

              <Button link="#" bck="#ffa800" color="#fff">
                Purchase tickets
              </Button>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
