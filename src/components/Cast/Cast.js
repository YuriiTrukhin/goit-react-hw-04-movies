import React, { Component } from "react";
import Axios from "axios";
import PropTypes from "prop-types";

export default class Cast extends Component {
  state = {
    actors: [],
  };
  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.id}/credits?api_key=401d61f37c17d956a98039a1a0734109&language=en-US`
    );
    this.setState({ actors: response.data.cast });
  }
  render() {
    return (
      <ul>
        {this.state.actors ? (
          this.state.actors.map((actor) => (
            <li key={actor.cast_id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                    : "https://rimatour.com/wp-content/uploads/2017/09/No-image-found.jpg"
                }
                alt=""
              />
              <h2>{actor.name}</h2>
              <p>character: {actor.character}</p>
            </li>
          ))
        ) : (
          <p>No actors added yet</p>
        )}
      </ul>
    );
  }
}
Cast.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.namber,
      profile_path: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
