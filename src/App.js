import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="bg-home">
        <div class="upper-heading">
          <h6>BOOK NAME</h6>
          <h1>Understanding Redux - 1</h1>
        </div>
        <div class="lower-body">
          <h6>TOTAL TIME SPENT ON THE PROJECT</h6>
          <div class="timer">
            <div class="clock-heading">
              <h6>ACTIVE SESSION: MINUTES</h6>
            </div>

            <div id="clockdiv">
              <div>
                <span class="days">05</span>
                <div class="smalltext">Days</div>
              </div>
              <div>
                <span class="hours">05</span>
                <div class="smalltext">Hours</div>
              </div>
              <div>
                <span class="minutes">25</span>
                <div class="smalltext">Minutes</div>
              </div>
              <div>
                <span class="seconds">55</span>
                <div class="smalltext">Seconds</div>
              </div>
            </div>
          </div>
          <div class="clock-buttons">
            <ul>
              <li>
                <a href="#">INCREASE</a>
              </li>
              <li>
                <a href="#">DECREASE</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
