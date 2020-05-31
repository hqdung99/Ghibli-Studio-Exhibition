import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { PeopleDetailWrapper } from "./css/people-detail";
import { AppConsumer } from "../../AppContext";

class PeopleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleDetail: {},
      films: [],
      species: {},
    };
  }

  componentDidMount() {
    this.fetchData(
      "https://ghibliapi.herokuapp.com/people/" +
        this.props.match.params.peopleId
    );
  }

  // fetch species data
  async fetchSpecies(url) {
    const data = await fetch(url);
    const species = await data.json();
    const newSpecies = { name: species.name, id: species.id };

    this.setState({
      species: newSpecies,
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
    const peopleDetail = await data.json();
    this.setState({
      peopleDetail: peopleDetail,
    });

    peopleDetail.films.forEach((url) => {
      this.fetchFilm(url);
    });

    this.fetchSpecies(peopleDetail.species);
  }

  render() {
    return (
      <AppConsumer>
        {(value) => (
          <PeopleDetailWrapper>
            <div className="left">
              <div className="image-container">
                <div className="small-container">
                  <img
                    src="../images/Ghibli-2.jpg"
                    alt="Ghibli"
                    className="img-fluid"
                  ></img>
                </div>
              </div>
            </div>
            <div className="right">
              <p className="title-item">{this.state.peopleDetail.name}</p>
              <p className="infor-item">
                Gender: <span>{this.state.peopleDetail.gender}</span>
              </p>
              <p className="infor-item">
                Age: <span>{this.state.peopleDetail.age}</span>
              </p>
              <p className="infor-item">
                Eye Color: <span>{this.state.peopleDetail.eye_color}</span>
              </p>
              <p className="infor-item">
                Hair Color: <span>{this.state.peopleDetail.hair_color}</span>
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
                Species:
                <Link
                  to={"/species/" + this.state.species.id}
                  key={this.state.species.id}
                  onClick={() => value.locationPathChangeSignal("species")}
                >
                  {this.state.species.name}
                </Link>
              </p>
            </div>
          </PeopleDetailWrapper>
        )}
      </AppConsumer>
    );
  }
}

export default withRouter(PeopleDetail);
