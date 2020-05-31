import React from "react";

// Create Context for People
const PeopleContext = React.createContext();

// People Provider
class PeopleProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: {},
    };
  }

  componentDidMount() {
    this.fetchData("https://ghibliapi.herokuapp.com/people");
  }

  async fetchData(url) {
    const data = await fetch(url);
    const people = await data.json();
    this.setState({ people: people });
  }

  render() {
    return (
      <PeopleContext.Provider
        value={{
          people: this.state.people,
        }}
      >
        {this.props.children}
      </PeopleContext.Provider>
    );
  }
}

const PeopleConsumer = PeopleContext.Consumer;
export { PeopleProvider, PeopleConsumer };
