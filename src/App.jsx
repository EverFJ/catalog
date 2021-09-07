import React from "react";
import Home from "./components/Home";
import Movie from "./components/Movie";
import Error from "./components/Error";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch("./movies.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ movies: data });
      });
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home movies={this.state.movies} />
          </Route>
          <Route path="/movie/:id" component={Movie}>
            {/* <Movie movies={this.state.movies} /> */}
          </Route>
          <Route path="*" component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
