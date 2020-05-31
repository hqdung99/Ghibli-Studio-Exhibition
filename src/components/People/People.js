import React, { Component } from "react";
import { PeopleProvider } from "./PeopleContext";
import PeopleItem from "./PeopleItem";

export default class People extends Component {
  render() {
    return (
      <PeopleProvider>
        <React.Fragment>
          <PeopleItem />
        </React.Fragment>
      </PeopleProvider>
    );
  }
}
