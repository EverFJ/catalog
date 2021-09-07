import React from "react";
// import movies from "../movies.json";
import { Link } from "react-router-dom";

let movies = [];

class Home extends React.Component {
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
    console.log("movies", this.state.movies);
    return (
      <ul>
        {this.state.movies.map((elem) => (
          <li key={elem.id.toString()}>
            <Link to={`movie/${elem.id}`}>{elem.title}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default Home;
