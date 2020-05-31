import React from "react";

// Create Context for Species
const SpeciesContext = React.createContext();

// Species Provider
class SpeciesProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      species: {},
    };
  }

  componentDidMount() {
    this.fetchData("https://ghibliapi.herokuapp.com/species");
  }

  async fetchData(url) {
    const data = await fetch(url);
    const species = await data.json();
    this.setState({ species: species });
  }

  render() {
    return (
      <SpeciesContext.Provider
        value={{
          species: this.state.species,
        }}
      >
        {this.props.children}
      </SpeciesContext.Provider>
    );
  }
}

const SpeciesConsumer = SpeciesContext.Consumer;
export { SpeciesProvider, SpeciesConsumer };
