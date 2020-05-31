import React from "react";

// Create Context for Vehicles
const VehiclesContext = React.createContext();

// Vehicles Provider
class VehiclesProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: {},
    };
  }

  componentDidMount() {
    this.fetchData("https://ghibliapi.herokuapp.com/vehicles");
  }

  async fetchData(url) {
    const data = await fetch(url);
    const vehicles = await data.json();
    this.setState({ vehicles: vehicles });
  }

  render() {
    return (
      <VehiclesContext.Provider
        value={{
          vehicles: this.state.vehicles,
        }}
      >
        {this.props.children}
      </VehiclesContext.Provider>
    );
  }
}

const VehiclesConsumer = VehiclesContext.Consumer;
export { VehiclesProvider, VehiclesConsumer };
