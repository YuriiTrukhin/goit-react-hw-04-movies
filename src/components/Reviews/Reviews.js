import React, { Component } from "react";
import Axios from "axios";
import PropTypes from "prop-types";

export default class Reviews extends Component {
  state = {
    reviews: [],
  };
  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.id}/reviews?api_key=401d61f37c17d956a98039a1a0734109&language=en-US&page=1`
    );
    this.setState({ reviews: response.data.results });
  }
  render() {
    console.log(this.state.reviews);
    return (
      <ul>
        {this.state.reviews.length > 0 ? (
          this.state.reviews.map((review) => (
            <li key={review.id}>
              <h2>Author:{review.author}</h2>
              <p>{review.content} </p>
            </li>
          ))
        ) : (
          <p>Not added yet</p>
        )}
      </ul>
    );
  }
}

Reviews.propTypes = {
  actores: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
