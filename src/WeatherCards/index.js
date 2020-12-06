import React from "react";
import Loader from "react-loader-spinner";
import WeatherCard from "./WeatherCard";


export default class WeatherCards extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isFetching: true,
        location: null,
        data: [],
        area: null
      };
    }
  
    componentDidMount() {
      const { location } = this.props;
  
      var proxyUrl  = "https://cors-anywhere.herokuapp.com/";
      var targetUrl = "https://api.darksky.net/forecast/df8dfdc94165fb4b059cbb51af0f1829/";
      fetch(
        proxyUrl +
          targetUrl +
          location.coords.latitude +
          "," +
          location.coords.longitude
      )
        .then(res => res.json())
        .then(data => {
          this.setState({
            isFetching: false,
            data: data.daily.data.slice(0, 1),
            area: data.timezone
          });
        });
    }
  
    render() {
      const { isFetching, error, data } = this.state;
      if (isFetching) return <Loader type="ThreeDots" color="#00BFFF" />;
      if (error) return error;
  
      return (
        <>
          {data.map((card, index) => (
            <div key={index}>
              <WeatherCard info={card} area={this.state.area} />
            </div>
          ))}
        </>
      );
    }
  }
  