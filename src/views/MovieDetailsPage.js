import Axios from "axios";
import React, { Component } from "react";
import { Link, Route, BrowserRouter } from "react-router-dom";
import Cast from "../components/Cast/Cast";
import Reviews from "../components/Reviews/Reviews";
import Card from "../components/Card/Card";

// import PropTypes from 'prop-types'

export default class MovieDetailsPage extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
  state = {
    page: null,
  };
  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=401d61f37c17d956a98039a1a0734109&language=en-US`
    );
    this.setState({ page: response.data })
  }
  render() {
    const { page } = this.state;
    return (
      <>
        {page && (
          <div>
            <Link to="/">Go back</Link>
            <Card {...page} />
            <div>
              <ul>
                <li>
                  <Link to={`${this.props.match.url}/cast`}>Cast</Link>
                </li>
                <li>
                  <Link to={`${this.props.match.url}/reviews`}>Reviews</Link>
                </li>
              </ul>
              <Route
                path={`${this.props.match.path}/cast`}
                render={(props) => <Cast {...props} id={this.state.page.id} />}
              />
              <Route
                exact
                path={`${this.props.match.path}/reviews`}
                render={(props) => <Reviews {...props} id={this.state.page.id} />}
              />
            </div>
          </div>
        )}
      </>
    );
  }
}