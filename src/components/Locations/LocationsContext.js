import React from "react";

// Create Context for Locations
const LocationsContext = React.createContext();

// Locations Provider
class LocationsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: {},
    };
  }

  componentDidMount() {
    this.fetchData("https://ghibliapi.herokuapp.com/locations");
  }

  async fetchData(url) {
    const data = await fetch(url);
    const locations = await data.json();
    this.setState({ locations: locations });
  }

  render() {
    return (
      <LocationsContext.Provider
        value={{
          locations: this.state.locations,
        }}
      >
        {this.props.children}
      </LocationsContext.Provider>
    );
  }
}

const LocationsConsumer = LocationsContext.Consumer;
export { LocationsProvider, LocationsConsumer };
