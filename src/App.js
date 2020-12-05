import { Link, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Movies from "./pages/Movies";
import { Fragment } from "react";

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
        <Route exact path="/">
          Welcome Movie World
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
      </main>
    </Fragment>
  );
}

export default App;
