import React, { PureComponent } from 'react';
import Slide from 'react-reveal/Slide';

class Countdown extends PureComponent {
  state = {
    deadline: 'Dec, 3, 2021',
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  componentDidMount() {
    const interval = setInterval(() => this.getTimeUntil(), 1000);

    this.setState({
      interval,
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  getTimeUntil = () => {
    const time = Date.parse(this.state.deadline) - Date.parse(new Date());

    if (time < 0) {
      console.log('Date passed');
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      this.setState({
        seconds,
        minutes,
        hours,
        days,
      });
    }
  };

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <Slide left delay={1000}>
        <div className="countdown_wrapper">
          <div className="countdown_top">Event starts in</div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">{days}</div>
              <div className="countdown_tag">Days</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{hours}</div>
              <div className="countdown_tag">Hs</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{minutes}</div>
              <div className="countdown_tag">Min</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{seconds}</div>
              <div className="countdown_tag">Sec</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}

export default Countdown;
