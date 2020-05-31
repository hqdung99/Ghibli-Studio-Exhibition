import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { FilmDetailWrapper } from "./css/film-detail";
import { AppConsumer } from "../../AppContext";

class FilmDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmDetail: {},
      listPeople: [],
      listVehicles: [],
      listLocations: [],
    };
  }

  componentDidMount() {
    this.fetchData(
      "https://ghibliapi.herokuapp.com/films/" + this.props.match.params.filmId
    );
    this.fetchPeople();
    this.fetchVehicles();
    this.fetchLocation();
  }

  // Check if location have in film
  checkIsLocationInFilm(listFilm, filmId) {
    let checkFlag = false;
    for (let i = 0; i < listFilm.length; i++) {
      if (listFilm[i].includes(filmId)) {
        checkFlag = true;
        break;
      }
    }
    return checkFlag;
  }

  // Fetch Location In List Film
  async fetchLocation() {
    const url = "https://ghibliapi.herokuapp.com/locations";
    const data = await fetch(url);
    const listLocations = await data.json();

    let listLocationsInFilm = [];

    listLocations.forEach((location) => {
      if (
        this.checkIsLocationInFilm(
          location.films,
          this.props.match.params.filmId
        )
      ) {
        listLocationsInFilm.push({ name: location.name, id: location.id });
      }
    });
    this.setState({
      listLocations: listLocationsInFilm,
    });
  }

  // Check if people have in film
  checkIsVehicleInFilm(filmsLink, filmId) {
    if (filmsLink.includes(filmId)) return true;
    return false;
  }

  // Fetch People In List Film
  async fetchVehicles() {
    const url = "https://ghibliapi.herokuapp.com/vehicles";
    const data = await fetch(url);
    const listVehicles = await data.json();

    let listVehiclesInFilm = [];

    listVehicles.forEach((vehicle) => {
      if (
        this.checkIsVehicleInFilm(vehicle.films, this.props.match.params.filmId)
      ) {
        listVehiclesInFilm.push({ name: vehicle.name, id: vehicle.id });
      }
    });
    this.setState({
      listVehicles: listVehiclesInFilm,
    });
  }

  // Fetch film detail
  async fetchData(url) {
    const data = await fetch(url);
    const filmDetail = await data.json();
    this.setState({
      filmDetail: filmDetail,
    });
  }

  // Check if people have in film
  checkIsPeopleInFilm(listFilm, filmId) {
    let checkFlag = false;
    for (let i = 0; i < listFilm.length; i++) {
      if (listFilm[i].includes(filmId)) {
        checkFlag = true;
        break;
      }
    }
    return checkFlag;
  }

  // Fetch People In List Film
  async fetchPeople() {
    const url = "https://ghibliapi.herokuapp.com/people";
    const data = await fetch(url);
    const listPeople = await data.json();

    let listPeopleInFilm = [];

    listPeople.forEach((people) => {
      if (
        this.checkIsPeopleInFilm(people.films, this.props.match.params.filmId)
      ) {
        listPeopleInFilm.push({ name: people.name, id: people.id });
      }
    });
    this.setState({
      listPeople: listPeopleInFilm,
    });
  }

  render() {
    if (this.state.filmDetail.id === undefined) {
      return <div></div>;
    }
    return (
      <FilmDetailWrapper className="wrapper">
        <AppConsumer>
          {(value) => {
            return (
              <React.Fragment>
                <div className="left">
                  <div className="image-container">
                    <div className="small-container">
                      <img
                        src="../images/Ghibli-Home.png"
                        alt="Ghibli"
                        className="img-fluid"
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <p className="title-item">{this.state.filmDetail.title}</p>
                  <p className="description-item  infor-item">
                    Description:{" "}
                    <span>{this.state.filmDetail.description}</span>
                  </p>
                  <p className="infor-item">
                    Director: <span>{this.state.filmDetail.director}</span>
                  </p>
                  <p className="infor-item">
                    Producer: <span>{this.state.filmDetail.producer}</span>
                  </p>
                  <p className="infor-item">
                    Release Date:{" "}
                    <span>{this.state.filmDetail.release_date}</span>
                  </p>
                  <p className="infor-item">
                    Rate Score: <span>{this.state.filmDetail.rt_score}</span>
                  </p>
                  <p className="infor-item">
                    People in Film:
                    {this.state.listPeople.map((people) => {
                      return (
                        <Link
                          to={"/people/" + people.id}
                          key={people.id}
                          onClick={() =>
                            value.locationPathChangeSignal("people")
                          }
                        >
                          {people.name}
                        </Link>
                      );
                    })}
                  </p>
                  <p className="infor-item">
                    Vehicles in Film:
                    {this.state.listVehicles.map((vehicle) => {
                      return (
                        <Link
                          to={"/vehicles/" + vehicle.id}
                          key={vehicle.id}
                          onClick={() =>
                            value.locationPathChangeSignal("vehicles")
                          }
                        >
                          {vehicle.name}
                        </Link>
                      );
                    })}
                  </p>
                  <p className="infor-item">
                    Locations in Film:
                    {this.state.listLocations.map((location) => {
                      return (
                        <Link
                          to={"/locations/" + location.id}
                          key={location.id}
                          onClick={() =>
                            value.locationPathChangeSignal("locations")
                          }
                        >
                          {location.name}
                        </Link>
                      );
                    })}
                  </p>
                </div>
              </React.Fragment>
            );
          }}
        </AppConsumer>
      </FilmDetailWrapper>
    );
  }
}

export default withRouter(FilmDetail);
