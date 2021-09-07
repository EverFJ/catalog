import React from "react";
import movies from "../movies.json";

class Movie extends React.Component {
  render() {
    const id = this.props.match.params.id;
    const movie = movies.find((elem) => elem.id.toString() === id);
    return (
      <>
        <h1>{movie.title}</h1>
        <img src={movie.image} alt="" />
        <p>director : {movie.director}</p>
        <p>Starring : {movie.stars.map((elem) => elem + ", ")}</p>
        <p>{movie.description}</p>
      </>
    );
  }
}

export default Movie;
