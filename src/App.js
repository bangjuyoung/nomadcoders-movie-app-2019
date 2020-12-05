import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Movies from "./pages/Movies";
import { Fragment } from "react";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <Fragment>
      <nav className="container">
        <div className="page-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/movies">Movies</Link>
        </div>
      </nav>

      <main className="container">
        <Switch>
          <Route exact path="/">
            Welcome Movie World
          </Route>
          <Route path="/about" component={About} />
          <Route
            path="/movies/:id"
            render={({ location }) => {
              const {
                id,
                title,
                year,
                genres,
                large_cover_image: poster,
                summary,
                rating,
              } = location.state.movie;

              return (
                <MovieDetail
                  id={id}
                  title={title}
                  year={year}
                  genres={genres}
                  poster={poster}
                  summary={summary}
                  rating={rating}
                />
              );
            }}
          />
          <Route exact path="/movies" component={Movies} />
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
