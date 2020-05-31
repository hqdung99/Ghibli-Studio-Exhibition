import React, { Component } from "react";
import { LocationsProvider } from "./LocationsContext";
import LocationItem from "./LocationItem";

export default class Locations extends Component {
  render() {
    return (
      <LocationsProvider>
        <React.Fragment>
          <LocationItem />
        </React.Fragment>
      </LocationsProvider>
    );
  }
}
