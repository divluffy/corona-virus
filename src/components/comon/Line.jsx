import React from "react";

function Line({ Country, TotalConfirmed, TotalDeaths, TotalRecovered }) {
  return (
    <div className="line_info">
      {Country && (
        <div>
          <span>Country</span>
          <span>{Country}</span>
        </div>
      )}
      <div>
        <span>Total Confirmed</span>
        <span>{TotalConfirmed}</span>
      </div>
      <div>
        <span>Total Deaths</span>
        <span>{TotalDeaths}</span>
      </div>
      <div>
        <span>Total Recovered</span>
        <span>{TotalRecovered}</span>
      </div>
    </div>
  );
}

export default Line;
