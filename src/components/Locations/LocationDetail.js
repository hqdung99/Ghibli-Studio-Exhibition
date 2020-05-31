import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { LocationsDetailWrapper } from "./css/location-detail";
import { AppConsumer } from "../../AppContext";

class LocationDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationDetail: {},
      residents: [],
      films: [],
    };
  }

  componentDidMount() {
    this.fetchData(
      "https://ghibliapi.herokuapp.com/locations/" +
        this.props.match.params.locationId
    );
  }

  // fetch resident data
  async fetchResident(url) {
    const data = await fetch(url);
    const resident = await data.json();
    const newResidents = [
      ...this.state.residents,
      { name: resident.name, id: resident.id },
    ];
    this.setState({
      residents: newResidents,
    });
  }

  // fetch film data
  async fetchFilm(url) {
    const data = await fetch(url);
    const film = await data.json();

    const newFilms = [...this.state.films, { title: film.title, id: film.id }];
    this.setState({
      films: newFilms,
    });
  }

  // fetch location data
  async fetchData(url) {
    const data = await fetch(url);
    const locationDetail = await data.json();
    this.setState({
      locationDetail: locationDetail,
    });

    locationDetail.residents.forEach((url) => {
      this.fetchResident(url);
    });

    locationDetail.films.forEach((url) => {
      this.fetchFilm(url);
    });
  }

  render() {
    return (
      <LocationsDetailWrapper>
        <AppConsumer>
          {(value) => (
            <React.Fragment>
              <div className="left">
                <div className="image-container">
                  <div className="small-container">
                    <img
                      src="../images/Ghibli-1.png"
                      alt="Ghibli"
                      className="img-fluid"
                    ></img>
                  </div>
                </div>
              </div>
              <div className="right">
                <p className="title-item">{this.state.locationDetail.name}</p>
                <p className="infor-item">
                  Climate:
                  <span>{this.state.locationDetail.climate}</span>
                </p>
                <p className="infor-item">
                  Terrain:
                  <span>{this.state.locationDetail.terrain}</span>
                </p>
                <p className="infor-item">
                  Surface Water:
                  <span>{this.state.locationDetail.surface_water}</span>
                </p>
                <p className="infor-item">
                  Residents
                  {this.state.residents.map((resident) => {
                    return (
                      <Link
                        to={"/people/" + resident.id}
                        key={resident.id}
                        onClick={() => value.locationPathChangeSignal("people")}
                      >
                        {resident.name}
                      </Link>
                    );
                  })}
                </p>
                <p className="infor-item">
                  Films
                  {this.state.films.map((film) => {
                    return (
                      <Link
                        to={"/film/" + film.id}
                        key={film.id}
                        onClick={() => value.locationPathChangeSignal("film")}
                      >
                        {film.title}
                      </Link>
                    );
                  })}
                </p>
              </div>
            </React.Fragment>
          )}
        </AppConsumer>
      </LocationsDetailWrapper>
    );
  }
}

export default withRouter(LocationDetail);
