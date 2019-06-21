import React from 'react';

class Clock extends React.Component {
  constructor( props ) {
    super(props);
    this.state = {
      time: Clock.currentTime()
    };
    this.tick = this.tick.bind(this);
  }
  
  static currentTime() {
    let n = new Date();
    const m = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];
    const day = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    let time = { }
    time.hours = n.getHours();
    time.minutes = n.getMinutes();
    time.seconds = n.getSeconds();
    time.month = m[n.getMonth()];
    time.year = 1900 + n.getYear();
    time.weekDay = day[n.getDay()];
    time.monthDay = n.getDate();
    n = n.getHours() + ":" + n.getMinutes() + ":" + n.getSeconds();
    return time;
  }

  render () {
    const t = Clock.currentTime();
    return (
      <div className = "clock-wrapper">
        <h2>Clock</h2>
        <div className="clock">
          <div className = "time">
            <span>Time:</span>
            <span>{t.hours}:{t.minutes}:{t.seconds}</span>
          </div>
          <div className = "date">
            <span>Date:</span>
            <span>{t.weekDay} {t.month} {t.monthDay} {t.year}</span>
          </div>
        </div>
      </div>
    )//
  }

  tick() {
    // const currentTime = this.currentTime.bind(this);
    this.setState({time: Clock.currentTime() });

  }

  componentDidMount() {
    this.handle = setInterval( this.tick, 1000 );
   }
   componentWillUnmount () {
     clearInterval(this.handle);
   }
}

export default Clock;
