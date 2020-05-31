import React from "react";

// Create Context for Film
const FilmContext = React.createContext();

// Film Provider
class FilmProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: {},
    };
  }

  componentDidMount() {
    this.fetchData("https://ghibliapi.herokuapp.com/films");
  }

  async fetchData(url) {
    const data = await fetch(url);
    const films = await data.json();
    this.setState({ films: films });
  }

  render() {
    return (
      <FilmContext.Provider
        value={{
          films: this.state.films,
        }}
      >
        {this.props.children}
      </FilmContext.Provider>
    );
  }
}

const FilmConsumer = FilmContext.Consumer;

export { FilmProvider, FilmConsumer };
