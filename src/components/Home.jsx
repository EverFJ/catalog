import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <ul>
        {this.props.movies.map((elem) => (
          <li key={elem.id.toString()}>
            <Link to={`movie/${elem.id}`}>{elem.title}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default Home;
