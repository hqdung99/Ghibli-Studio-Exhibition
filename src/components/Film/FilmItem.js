import React, { Component } from "react";
import { FilmConsumer } from "./FilmContext";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FilmWrapper } from "./css/film-style";

export default class FilmItem extends Component {
  render() {
    return (
      <React.Fragment>
        <FilmWrapper>
          <div className="items-container container">
            <div className="row">
              <FilmConsumer>
                {(value) => {
                  if (value.films.length !== undefined) {
                    return value.films.map((film) => {
                      return (
                        <div
                          key={film.id}
                          className="item col-lg-4 col-md-6 col-12"
                        >
                          <div className="card">
                            <div className="top-card">
                              <div className="image-container">
                                <img
                                  src="./images/Ghibli-Home.png"
                                  className="img-fluid"
                                ></img>
                              </div>
                            </div>
                            <div className="content-container">
                              <p className="title">{film.title}</p>
                              <p className="description">
                                {film.description.substring(0, 70)} ...
                              </p>
                              <p className="director">
                                Director: {film.director}
                              </p>
                              <p className="release-date">
                                {film.release_date}
                              </p>
                              <Link
                                className="btn btn-primary"
                                to={"/film/" + film.id}
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
              </FilmConsumer>
            </div>
          </div>
        </FilmWrapper>
      </React.Fragment>
    );
  }
}
