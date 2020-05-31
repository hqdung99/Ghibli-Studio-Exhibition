import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import "./css/Nav.css";
import { AppConsumer } from "../../AppContext";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: null,
      listPage: ["film", "people", "species", "vehicles", "locations"],
    };
  }

  render() {
    return (
      <div className="navigation-bar">
        <AppConsumer>
          {(value) => {
            return (
              <nav>
                <div className="container-text-logo">
                  <Link
                    to="/"
                    onClick={() => {
                      value.locationPathChangeSignal("home");
                    }}
                  >
                    Ghibli
                  </Link>
                </div>
                <ul>
                  {this.state.listPage.map((title) => {
                    return (
                      <li key={title}>
                        <Link
                          to={"/" + title}
                          className={
                            title === value.locationPath ? "active" : ""
                          }
                          onClick={() => value.locationPathChangeSignal(title)}
                        >
                          {title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            );
          }}
        </AppConsumer>
      </div>
    );
  }
}

export default withRouter(Nav);
