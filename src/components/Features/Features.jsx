import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import "./Features.css";

function Features() {
  return (
    <div className="features">
      <div className="feature__item">
        <span className="feature__title">Revanue</span>
        <div className="feature-container">
          <span className="feature__money">$2,415</span>
          <span className="feature__rate">
            -11.4
            <ArrowDownwardIcon className="feature__icon negative" />
          </span>
        </div>
        <span className="feature__subtitle">Compared to last month</span>
      </div>
      <div className="feature__item">
        <span className="feature__title">Sales</span>
        <div className="feature-container">
          <span className="feature__money">$4,415</span>
          <span className="feature__rate">
            -1.4
            <ArrowDownwardIcon className="feature__icon negative" />
          </span>
        </div>
        <span className="feature__subtitle">Compared to last month</span>
      </div>
      <div className="feature__item">
        <span className="feature__title">Cost</span>
        <div className="feature-container">
          <span className="feature__money">$2,225</span>
          <span className="feature__rate">
            +2.4
            <ArrowUpwardIcon className="feature__icon" />
          </span>
        </div>
        <span className="feature__subtitle">Compared to last month</span>
      </div>
    </div>
    
  );
}

export default Features;
