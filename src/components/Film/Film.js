import React, { Component } from "react";
import { FilmProvider } from "./FilmContext";
import FilmItem from "./FilmItem";

export default class Film extends Component {
  render() {
    return (
      <FilmProvider>
        <React.Fragment>
          <FilmItem />
        </React.Fragment>
      </FilmProvider>
    );
  }
}
