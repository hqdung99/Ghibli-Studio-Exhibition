import React, { Component } from "react";
import { SpeciesConsumer } from "./SpeciesContext";
import { SpeciesWrapper } from "./css/species-style";
import { Link } from "react-router-dom";

export default class SpeciesItem extends Component {
  render() {
    return (
      <React.Fragment>
        <SpeciesWrapper>
          <div className="items-container container">
            <div className="row">
              <SpeciesConsumer>
                {(value) => {
                  if (value.species.length !== undefined) {
                    return value.species.map((spec) => {
                      return (
                        <div
                          key={spec.id}
                          className="item col-lg-4 col-md-6 col-12"
                        >
                          <div className="card">
                            <div className="top-card">
                              <div className="image-container">
                                <img
                                  src="./images/Ghibli-3.jpg"
                                  className="img-fluid"
                                ></img>
                              </div>
                            </div>
                            <div className="content-container">
                              <p className="name">{spec.name}</p>
                              <p className="classification">
                                {spec.classification}
                              </p>
                              <p className="eye_colors">{spec.eye_colors}</p>
                              <Link
                                to={"/species/" + spec.id}
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
              </SpeciesConsumer>
            </div>
          </div>
        </SpeciesWrapper>
      </React.Fragment>
    );
  }
}
