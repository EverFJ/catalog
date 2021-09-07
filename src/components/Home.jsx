import React from "react";
import movies from "../movies.json";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    // console.log("movies", movies);
    return (
      <ul>
        {movies.map((elem) => (
          <li key={elem.id.toString()}>
            <Link to={`movie/${elem.id}`}>{elem.title}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default Home;
