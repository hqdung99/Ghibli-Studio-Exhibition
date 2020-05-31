import React, { Component } from "react";
import { SpeciesProvider } from "./SpeciesContext";
import SpeciesItem from "./SpeciesItem";

export default class Species extends Component {
  render() {
    return (
      <SpeciesProvider>
        <React.Fragment>
          <SpeciesItem />
        </React.Fragment>
      </SpeciesProvider>
    );
  }
}
