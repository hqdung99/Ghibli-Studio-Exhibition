import React, { Component } from "react";
import { VehiclesProvider } from "./VehiclesContext";
import VehiclesItem from "./VehiclesItem";

export default class Vehicles extends Component {
  render() {
    return (
      <VehiclesProvider>
        <React.Fragment>
          <VehiclesItem />
        </React.Fragment>
      </VehiclesProvider>
    );
  }
}
