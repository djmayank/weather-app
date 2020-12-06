import React from "react";
//import Unix_timestamp from "/Users/mayankkhanna/Desktop/weatherapp/src/Timeconverter.js";
import Unix_timestamp from "../../../src/Timeconverter.js"
import WeatherInfoWidget from "./WeatherInfoWidget";

const WeatherCard = props => {
    var num = ((props.info.temperatureHigh - 32) * 5) / 9;
    var dn = Date();
    var time = dn.slice(16, 18);
    dn = dn.slice(0, 24);
    const isNight = time >= 18 || time <= 5;
    var temp = num.toPrecision(3);
    var data = [
      {
        text: "CLOUD COVER",
        icon: "wi-cloudy",
        value: `${props.info.cloudCover}%`
      },
      {
        text: "HUMIDITY",
        icon: "wi-raindrop",
        value: `${props.info.humidity}%`
      },
      {
        text: "PRESSURE",
        icon: "wi-barometer",
        value: `${props.info.pressure}hPa`
      },
      {
        text: "UV INDEX",
        icon: "wi-hot",
        value: `${props.info.uvIndex}`
      }
    ];
  
    return (
      <div className={isNight ? "card nighttime" : "card"}>
        <div className="outer-class">
          <div className="mainbox">
            <p> {props.area} </p>
            <p> {dn} </p>
            <p className="up"> {props.info.icon} </p>
          </div>
  
          <div className="temperature">
            <span className="thermo wi wi-thermometer"> </span>
            {temp}
            {/* &#8451;  */}
            <span className="wi wi-celsius" />
          </div>
  
          <div className="info">
            {data.map((data, index) => (
              <WeatherInfoWidget
                key={index}
                text={data.text}
                icon={data.icon}
                value={data.value}
              />
            ))}
          </div>
  
          <div className="icon-tray">
            <div
              className={
                isNight ? "icon wi wi-night-clear" : "icon wi wi-day-sunny"
              }
            />
  
            <div className="day-length">
              <div className="wrapper">
                <div className="weather-len">
                  {" "}
                  <div className="fix wi wi-sunrise" />
                </div>{" "}
                <span>{Unix_timestamp(props.info.sunriseTime)}</span>
              </div>
              <div className="wrapper">
                <div className="weather-len">
                  {" "}
                  <div className="fix wi wi-moonrise" />
                </div>{" "}
                <span>{Unix_timestamp(props.info.sunsetTime)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default WeatherCard;