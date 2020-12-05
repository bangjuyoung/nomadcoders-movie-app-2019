function MovieDetail(props) {
  const { title, year, genres = [], poster, summary, rating } = props;

  return (
    <div>
      <h1>{title}</h1>
      <p>{year}</p>
      <p>{genres.join(", ")}</p>
      <p>평점 {rating}</p>
      <img src={poster} alt="" />
      <div>{summary}</div>
    </div>
  );
}

export default MovieDetail;
