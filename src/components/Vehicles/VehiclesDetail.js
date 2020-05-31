import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { VehiclesDetailWrapper } from "./css/vehicles-detail";
import { AppConsumer } from "../../AppContext";

class VehiclesDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehiclesDetail: {},
      film: {},
      pilot: {},
    };
  }

  componentDidMount() {
    this.fetchData(
      "https://ghibliapi.herokuapp.com/vehicles/" +
        this.props.match.params.vehicleId
    );
  }

  // fetch pilot data
  async fetchPilot(url) {
    const data = await fetch(url);
    const pilot = await data.json();
    const newPilot = { name: pilot.name, id: pilot.id };

    this.setState({
      pilot: newPilot,
    });
  }

  // fetch film data
  async fetchFilm(url) {
    const data = await fetch(url);
    const film = await data.json();

    const newFilm = { title: film.title, id: film.id };
    this.setState({
      film: newFilm,
    });
  }

  // fetch people data
  async fetchData(url) {
    const data = await fetch(url);
    const vehiclesDetail = await data.json();
    this.setState({
      vehiclesDetail: vehiclesDetail,
    });

    this.fetchFilm(vehiclesDetail.films);

    this.fetchPilot(vehiclesDetail.pilot);
  }

  render() {
    return (
      <AppConsumer>
        {(value) => (
          <VehiclesDetailWrapper>
            <div className="left">
              <div className="image-container">
                <div className="small-container">
                  <img
                    src="../images/Ghibli-4.jpg"
                    alt="Ghibli"
                    className="img-fluid"
                  ></img>
                </div>
              </div>
            </div>
            <div className="right">
              <p className="title-item">{this.state.vehiclesDetail.name}</p>
              <p className="infor-item">
                Description:{" "}
                <span>{this.state.vehiclesDetail.description}</span>
              </p>
              <p className="infor-item">
                Class: <span>{this.state.vehiclesDetail.vehicle_class}</span>
              </p>
              <p className="infor-item">
                Length: <span>{this.state.vehiclesDetail.length}</span>
              </p>
              <p className="infor-item">
                Films:
                <Link
                  to={"/film/" + this.state.film.id}
                  key={this.state.film.id}
                  onClick={() => value.locationPathChangeSignal("film")}
                >
                  {this.state.film.title}
                </Link>
              </p>
              <p className="infor-item">
                Pilot:
                <Link
                  to={"/people/" + this.state.pilot.id}
                  key={this.state.pilot.id}
                  onClick={() => value.locationPathChangeSignal("people")}
                >
                  {this.state.pilot.name}
                </Link>
              </p>
            </div>
          </VehiclesDetailWrapper>
        )}
      </AppConsumer>
    );
  }
}

export default withRouter(VehiclesDetail);
