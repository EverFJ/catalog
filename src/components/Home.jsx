import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <>
        {this.props.movies.map((elem) => (
          <Link key={elem.id} to={`movie/${elem.id}`}>
            <img src={elem.image} alt="" />
          </Link>
        ))}
      </>
    );
  }
}

export default Home;
