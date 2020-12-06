import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import routes from "./routes";
import AppBar from "./AppBar/AppBar";
import Loader from "./components/Loader/Loader";

const AsyncHomePage = lazy(() => import("./views/HomePage"));
const AsyncMoviesPage = lazy(() => import("./views/MoviesPage"));
const AsyncMovieDetailsPage = lazy(() => import("./views/MovieDetailsPage"));
const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path={routes.HomePage} component={AsyncHomePage} />
        <Route exact path={routes.MoviesPage} component={AsyncMoviesPage} />
        <Route path={routes.MovieDetailsPage} component={AsyncMovieDetailsPage} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </>
);

export default App;


