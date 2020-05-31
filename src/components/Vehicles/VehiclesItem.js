import React, { Component } from "react";
import { VehiclesConsumer } from "./VehiclesContext";
import { Link } from "react-router-dom";
import { VehiclesWrapper } from "./css/vehicles-style";

export default class VehiclesItem extends Component {
  render() {
    return (
      <React.Fragment>
        <VehiclesWrapper>
          <div className="items-container container">
            <div className="row">
              <VehiclesConsumer>
                {(value) => {
                  if (value.vehicles.length !== undefined) {
                    return value.vehicles.map((vehicle) => {
                      return (
                        <div
                          key={vehicle.id}
                          className="item col-lg-4 col-md-6 col-12"
                        >
                          <div className="card">
                            <div className="top-card">
                              <div className="image-container">
                                <img
                                  src="./images/Ghibli-4.jpg"
                                  className="img-fluid"
                                ></img>
                              </div>
                            </div>
                            <div className="content-container">
                              <p className="name">{vehicle.name}</p>
                              <p className="description">
                                {vehicle.description}
                              </p>
                              <p className="vehicle_class">
                                {vehicle.vehicle_class}
                              </p>
                              <p className="length">{vehicle.length}</p>
                              <Link
                                to={"/vehicles/" + vehicle.id}
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
              </VehiclesConsumer>
            </div>
          </div>
        </VehiclesWrapper>
      </React.Fragment>
    );
  }
}
