import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { SpeciesDetailWrapper } from "./css/species-detail";
import { AppConsumer } from "../../AppContext";

class SpeciesDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speciesDetail: {},
      films: [],
      people: [],
    };
  }

  componentDidMount() {
    this.fetchData(
      "https://ghibliapi.herokuapp.com/species/" +
        this.props.match.params.speciesId
    );
  }

  // fetch People data
  async fetchPeople(url, count) {
    const data = await fetch(url);
    const person = await data.json();
    const newPeople = [
      ...this.state.people,
      { name: person.name, id: person.id },
    ];

    this.setState({
      people: newPeople,
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

  // fetch people data
  async fetchData(url) {
    const data = await fetch(url);
    const speciesDetail = await data.json();
    this.setState({
      speciesDetail: speciesDetail,
    });

    speciesDetail.films.forEach((url) => {
      this.fetchFilm(url);
    });

    let count = 0;
    speciesDetail.people.forEach((url) => {
      this.fetchPeople(url, count++);
    });
  }

  render() {
    return (
      <AppConsumer>
        {(value) => (
          <SpeciesDetailWrapper>
            <div className="left">
              <div className="image-container">
                <div className="small-container">
                  <img
                    src="../images/Ghibli-3.jpg"
                    alt="Ghibli"
                    className="img-fluid"
                  ></img>
                </div>
              </div>
            </div>
            <div className="right">
              <p className="title-item">{this.state.speciesDetail.name}</p>
              <p className="infor-item">
                Classification:{" "}
                <span>{this.state.speciesDetail.classification}</span>
              </p>
              <p className="infor-item">
                Eye Colors: <span>{this.state.speciesDetail.eye_colors}</span>
              </p>
              <p className="infor-item">
                Hair Color: <span>{this.state.speciesDetail.hair_colors}</span>
              </p>
              <p className="infor-item">
                Films:
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
              <p className="infor-item">
                People:
                {this.state.people.map((person) => {
                  return (
                    <Link
                      to={"/people/" + person.id}
                      key={person.id}
                      onClick={() => value.locationPathChangeSignal("people")}
                    >
                      {person.name}
                    </Link>
                  );
                })}
              </p>
            </div>
          </SpeciesDetailWrapper>
        )}
      </AppConsumer>
    );
  }
}

export default withRouter(SpeciesDetail);
