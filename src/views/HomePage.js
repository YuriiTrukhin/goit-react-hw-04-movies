import Axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

// import PropTypes from 'prop-types'

export default class HomePage extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
  state = {
    movies: [],
  };
  async componentDidMount() {
    const response = await Axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=401d61f37c17d956a98039a1a0734109"
    );
    this.setState({ movies: response.data.results });
  }
  render() {
    return (
      <>
        <h1>Это страница книг</h1>
        <ul>
          {this.state.movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`${this.props.match.url}movies/${movie.id}`}> {movie.title || movie.name}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
