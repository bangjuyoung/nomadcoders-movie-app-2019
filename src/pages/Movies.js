import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Movies.css";

import MovieCard from "../components/MovieCard";

function Movies(props) {
  console.log("Movies");

  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const moviesPromise = async () => {
      try {
        let moviesPromise = await axios.get(
          "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
        );
        setMovies(moviesPromise["data"]["data"]["movies"]);
      } catch (e) {
        console.error(e);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    };

    moviesPromise();
  }, []);

  return (
    <div className="movies">
      {isLoading ? (
        <div className="movie--loading">Loading...</div>
      ) : (
        movies &&
        movies.map((movie) => {
          return (
            <div className="movie" key={movie.id}>
              <Link
                to={{ pathname: `movies/${movie.id}`, state: { movie } }}
                className="movie-link"
              >
                <MovieCard
                  id={movie.id}
                  title={movie.title}
                  year={movie.year}
                  genres={movie.genres}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Movies;
