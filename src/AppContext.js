import React from "react";

// Create Context for AppContext
const AppContext = React.createContext();

// AppContext.Provider
class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationPath: "",
    };
  }

  componentDidMount() {
    this.initialLocationPath();
  }

  initialLocationPath = () => {
    const location = window.location;
    if (location.pathname.includes("film")) {
      this.locationPathChangeSignal("film");
    } else if (location.pathname.includes("people")) {
      this.locationPathChangeSignal("people");
    } else if (location.pathname.includes("locations")) {
      this.locationPathChangeSignal("locations");
    } else if (location.pathname.includes("species")) {
      this.locationPathChangeSignal("species");
    } else if (location.pathname.includes("vehicles")) {
      this.locationPathChangeSignal("vehicles");
    } else {
      this.locationPathChangeSignal("home");
    }
  };

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  changeTitle(title) {
    document.title = title;
  }

  locationPathChangeSignal = (newLocation) => {
    const cap = this.capitalizeFirstLetter(newLocation);
    this.changeTitle("Ghibli | " + cap);
    this.setState(() => {
      return { locationPath: newLocation };
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          locationPathChangeSignal: this.locationPathChangeSignal,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const AppConsumer = AppContext.Consumer;
export { AppProvider, AppConsumer };
