import React from "react";
import axios from "axios";

import './App.css';
import MovieCard from "./components/MovieCard";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: null,
      isLoading: true
    }
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    axios
      .get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
      .then(({data}) => {
        const { data: result } = data;
        this.setState({
          movies: result['movies']
        });
      })
      .catch(error => {
        console.log(error);
      })
      .then(() => {
        console.log('always executed');

        setTimeout(() => {
          this.setState({
            isLoading: false
          });
        }, 2000);

      });
  }

  render() {
    const { isLoading, movies } = this.state;

    return (
      <main className="container">
        <div className="movies">
          {
            isLoading
              ? <div className="movie--loading">Loading...</div>
              : movies && movies.map(movie => {
                return (
                  <div className="movie" key={movie.id} >
                    <MovieCard movie={movie} />
                  </div>
                )
              }
            )
          }
        </div>
      </main>
    );
  }
}

export default App;
