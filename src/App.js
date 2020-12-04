import React, { useState, useEffect } from "react";
import axios from "axios";

import './App.css';
import MovieCard from "./components/MovieCard";

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState(null);

  useEffect(() => {

    axios
      .get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
      .then(({data}) => {
        const { data: result } = data;
        setMovies( result['movies']);
      })
      .catch(error => {
        console.error(error);
      })
      .then(() => {
        console.log('always executed');

        setTimeout(() => {
          setIsLoading(false);
        }, 2000);

      });
  }, []);

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

export default App;
