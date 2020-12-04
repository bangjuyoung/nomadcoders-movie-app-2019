import PropTypes from "prop-types";
import "./MovieCard.css";

function MovieCard(props) {
  const { movie: {id, title, year, genres, summary, medium_cover_image:poster } } = props;

  return (
    <section id={`movie${id}`} className="movie-card">
      <div className="movie-card__body">
        <h2 className="movie-card__title">{title}</h2>
        <p className="movie-card__caption">
          <time dateTime="2021">{year}</time> {genres.join(', ')}
        </p>
        <p className="movie-card__text">
          {summary.slice(0, 100)}...
        </p>
      </div>
      <div className="movie-card__thumbnail">
        <img src={poster} alt=""/>
      </div>
    </section>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number,
    genres: PropTypes.array,
    summary: PropTypes.string,
    medium_cover_image: PropTypes.string
  })
}

export default MovieCard;
