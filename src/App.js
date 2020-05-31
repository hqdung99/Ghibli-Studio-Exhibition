import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Film from "./components/Film";
import People from "./components/People";
import Locations from "./components/Locations";
import Species from "./components/Species";
import Vehicles from "./components/Vehicles";
import Home from "./components/Home";

import FilmDetail from "./components/Film/FilmDetail";
import LocationDetail from "./components/Locations/LocationDetail";
import PeopleDetail from "./components/People/PeopleDetail";
import SpeciesDetail from "./components/Species/SpeciesDetail";
import VehiclesDetail from "./components/Vehicles/VehiclesDetail";
import "./App.css";
import Nav from "./components/Nav";
import { AppProvider } from "./AppContext";

export default class App extends Component {
  render() {
    return (
      <AppProvider>
        <Router>
          <div className="app-container">
            <Nav />
            <Switch>
              <Route exact path="/vehicles">
                <Vehicles />
              </Route>
              <Route exact path="/vehicles/:vehicleId">
                <VehiclesDetail />
              </Route>
              <Route exact path="/species">
                <Species />
              </Route>
              <Route exact path="/species/:speciesId">
                <SpeciesDetail />
              </Route>
              <Route exact path="/locations">
                <Locations />
              </Route>
              <Route path="/locations/:locationId">
                <LocationDetail />
              </Route>
              <Route exact path="/people">
                <People />
              </Route>
              <Route exact path="/people/:peopleId">
                <PeopleDetail />
              </Route>
              <Route path={"/film/:filmId"}>
                <FilmDetail />
              </Route>
              <Route path="/film">
                <Film />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </AppProvider>
    );
  }
}
