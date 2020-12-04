import './App.css';
import MovieCard from "./components/MovieCard";

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
            
            return (
              <div className="movie">
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
