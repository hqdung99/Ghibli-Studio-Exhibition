import React, { Component } from "react";
import { LocationsConsumer } from "./LocationsContext";
import { LocationWrapper } from "./css/location-style.js";
import { Link } from "react-router-dom";
export default class LocationItem extends Component {
  render() {
    return (
      <React.Fragment>
        <LocationWrapper>
          <div className="items-container container">
            <div className="row">
              <LocationsConsumer>
                {(value) => {
                  if (value.locations.length !== undefined) {
                    return value.locations.map((location) => {
                      return (
                        <div
                          key={location.id}
                          className="item col-lg-4 col-md-6 col-12"
                        >
                          <div className="card">
                            <div className="top-card">
                              <div className="image-container">
                                <img
                                  src="./images/Ghibli-1.png"
                                  className="img-fluid"
                                ></img>
                              </div>
                            </div>
                            <div className="content-container">
                              <p className="name">{location.name}</p>
                              <p className="climate">
                                Climate: <span>{location.climate}</span>
                              </p>
                              <p className="terrain">
                                Terrain: {location.terrain}
                              </p>
                              <p className="surface_water">
                                {location.surface_water}
                              </p>
                              <Link
                                to={"/locations/" + location.id}
                                className="btn btn-primary"
                              >
                                More
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    });
                  }
                }}
              </LocationsConsumer>
            </div>
          </div>
        </LocationWrapper>
      </React.Fragment>
    );
  }
}
