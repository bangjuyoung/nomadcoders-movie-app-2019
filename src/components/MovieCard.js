import "./MovieCard.css";

function MovieCard(props) {
  const { movie } = props;
  const {title, year, generes, summary, poster} = movie;

  return (
    <section className="movie-card">
      <div className="movie-card__body">
        <h2 className="movie-card__title">{title}</h2>
        <p className="movie-card__caption">
          <time dateTime="2021">{year}</time> {generes}
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

export default MovieCard;
