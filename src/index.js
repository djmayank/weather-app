import React from "react";
import ReactDOM from "react-dom";
import Loader from "react-loader-spinner";
import "./index.css";
import LocationCapture from "./LocationCapture";
import * as serviceWorker from "./serviceWorker";
import WeatherCards from "./WeatherCards";


// ----- App ------
class WeatherApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isFetching: false,
      location: {},
      data: []
    };
  }

  render() {
    const { isFetching, error, location = {} } = this.state;
    if (isFetching) return <Loader type="ThreeDots" color="#00BFFF" />;
    if (error) return error;

    return (
      <>
        <LocationCapture
          onLocationSuccess={location => this.setState({ location })}
          onError={error => this.setState({ error })}
        />
        {location.coords && <WeatherCards location={location} />}
      </>
    );
  }
}

ReactDOM.render(<WeatherApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
