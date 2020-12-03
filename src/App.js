import './App.css';

function App() {
  return (
    <main className="container">
      <div className="movies">
        {
          [1,2,3,4,5,6].map(item => (
            <div className="movie">
              <section className="movie-card">
                <div className="movie-card__body">
                  <h2 className="movie-card__title">Deported</h2>
                  <p className="movie-card__caption">
                    <time dateTime="2021">2021</time> Comedy
                  </p>
                  <p className="movie-card__text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </div>
                <div className="movie-card__thumbnail">
                  <img src="https://yts.mx/assets/images/movies/deported_2020/medium-cover.jpg" alt=""/>
                </div>
              </section>
            </div>
          ))
        }
      </div>
    </main>
  );
}

export default App;
