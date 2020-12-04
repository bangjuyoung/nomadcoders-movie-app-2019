import './App.css';

const movies = [1,2,3,4,5,6].map(item => (
  {
    id: 1,
    title: 'Deported',
    year: 2021,
    generes: 'Comedy',
    summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    poster: 'https://yts.mx/assets/images/movies/deported_2020/medium-cover.jpg'
  }
));

function App() {
  return (
    <main className="container">
      <div className="movies">
        {
          movies.map(movie => {

            const {title, year, generes, summary, poster} = movie;

            return (
              <div className="movie">
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
