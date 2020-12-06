import React from "react";



const WeatherInfoWidget = props => (
    <div className="info-tile">
      <p className="info-text">{props.text}</p>
      <i className={`wi ${props.icon}`} />
      <p>{props.value}</p>
    </div>
  );

export default WeatherInfoWidget;