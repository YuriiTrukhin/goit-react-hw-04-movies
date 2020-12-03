import React, { Component } from "react";
import Axios from "axios";
import Search from "../components/Search/Search";
import { Link } from "react-router-dom";

// import PropTypes from 'prop-types'

export default class MoviesPage extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
  state = {
    shows: [],
    query: "",
  };
  async componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      const response = await Axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=401d61f37c17d956a98039a1a0734109&query=${this.state.query}&language=en-US&page=1&include_adult=false`
      );

      this.setState({ shows: response.data.results });
    }
  }

  changeAdress = (query) => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
    this.setState({
      query: query,
    });
  };

  render() {
    console.log(this.state.shows);
    return (
      <div>
        <Search changeAdress={this.changeAdress} />
        {this.state.shows.length > 1 ? (
          <ul>
            {this.state.shows.map((movie) => (
              <li key={movie.id}>
                <Link to={`${this.props.match.url}/${movie.id}`}> {movie.title || movie.name}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <h3>Nothing found for your request</h3>
        )}
      </div>
    );
  }
}
