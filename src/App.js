import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';
import { keyboard } from '@testing-library/user-event/dist/keyboard';

function App() {
  const [loading, setLoding] = useState(true);
  const [movies, setMovice] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
      )
    ).json();
    setMovice(json.data.movies);
    setLoding(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  // https://api.coinpaprika.com/v1/tickers
  return (
    <div>
      <h1>The Coins</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} />
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((g) => (
                  <li>{g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
