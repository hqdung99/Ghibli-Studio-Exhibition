import React, { Component } from "react";
import { PeopleConsumer } from "./PeopleContext";
import { PeopleWrapper } from "./css/people-style.js";
import { Link } from "react-router-dom";

export default class PeopleItem extends Component {
  render() {
    return (
      <React.Fragment>
        <PeopleWrapper>
          <div className="items-container container">
            <div className="row">
              <PeopleConsumer>
                {(value) => {
                  if (value.people.length !== undefined) {
                    return value.people.map((person) => {
                      return (
                        <div
                          key={person.id}
                          className="item col-lg-4 col-md-6 col-12"
                        >
                          <div className="card">
                            <div className="top-card">
                              <div className="image-container">
                                <img
                                  src="./images/Ghibli-2.jpg"
                                  className="img-fluid"
                                ></img>
                              </div>
                            </div>
                            <div className="content-container">
                              <p className="name">{person.name}</p>
                              <p className="gender">
                                Gender: <span>{person.gender}</span>
                              </p>
                              <p className="age">Age: {person.age}</p>
                              <Link
                                className="btn btn-primary"
                                to={"/people/" + person.id}
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
              </PeopleConsumer>
            </div>
          </div>
        </PeopleWrapper>
      </React.Fragment>
    );
  }
}
