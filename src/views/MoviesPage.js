import React, { Component } from "react";
import Axios from "axios";
import Search from "../components/Search/Search";
import { Link } from "react-router-dom";
import queryString from "query-string";

export default class MoviesPage extends Component {
  state = {
    shows: [],
    query: "",
    totalResults: 0,
    error: false,
  };
  async componentDidMount() {
    const { query } = queryString.parse(this.props.location.search);
    if (query) {
      try {
        const response = await Axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=401d61f37c17d956a98039a1a0734109&query=${query}&language=en-US&page=1&include_adult=false`
        );

        this.setState({
          totalResults: response.data.total_results,
          shows: response.data.results,
        });
      } catch {
        this.setState({
          error: true,
        });
      }
    }
  }
  async componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = queryString.parse(prevProps.location.search);
    const { query: nextQuery } = queryString.parse(this.props.location.search);

    if (nextQuery !== prevQuery) {
      try {
        const response = await Axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=401d61f37c17d956a98039a1a0734109&query=${nextQuery}&language=en-US&page=1&include_adult=false`
        );

        this.setState({
          totalResults: response.data.total_results,
          shows: response.data.results,
        });
      } catch {
        this.setState({
          error: true,
        });
      }
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
    const { totalResults, query, error } = this.state;

    return (
      <div className="search">
        <Search changeAdress={this.changeAdress} />
        {totalResults > 1 || error ? (
          <ul>
            {this.state.shows.map((movie) => (
              <li key={movie.id}>
                <Link to={{ pathname: `${this.props.match.url}/${movie.id}`, state: { from: this.props.location } }}>
                  {" "}
                  {movie.title || movie.name}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          (query !== "" || error) && <h3>Nothing found for your request</h3>
        )}
      </div>
    );
  }
}
